import REACT, { useState } from 'react';
import DaumPostCode from 'react-daum-postcode';
import { useHistory } from 'react-router';
import { dbService, storageService } from '../fbase';

import TextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const EditStore=()=>{
    const storeObj =useState(() => JSON.parse(window.localStorage.getItem("storeObj")) || 0);
    const [newStoreObj, setNewStoreObj] = useState(() => JSON.parse(window.localStorage.getItem("storeObj")) || 0);
    const hostObj =useState(() => JSON.parse(window.localStorage.getItem("hostObj")) || 0);
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState("");
    const [address, setAddress] = useState("");
    const [attachment, setAttachment] = useState("");
    const history = useHistory();
    const onFileChange = (event) => {
        const { target: { files } } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const { currentTarget: { result } } = finishedEvent;
            setAttachment(result);
        };
        reader.readAsDataURL(theFile);
    };
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        console.log(fullAddress);
        setAddress(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
        setIsOpen(false);
        setNewStoreObj(newStoreObj => ({ ...newStoreObj, storeAddress: fullAddress }))
    }
    const onPostClick = () => {
        setIsOpen(prev=>!prev);
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            
            if(address=="") new Error("주소를 입력해주세요.");
            let attachmentURL = "";
            if (attachment !== "") {
                const attachmentRef = storageService.ref().child(`${hostObj[0].hostId}/${uuidv4()}`);
                const response = await attachmentRef.putString(attachment, "data_url");
                attachmentURL = await response.ref.getDownloadURL();
                await dbService.collection("Stores").doc(storeObj[0].id).update({ ...newStoreObj, menuURL: attachmentURL });
            }
            else{
                await dbService.collection("Stores").doc(storeObj[0].id).update({ ...newStoreObj});
            }

            window.localStorage.removeItem("storeObj");
            window.localStorage.setItem("storeObj",  JSON.stringify(newStoreObj))
            history.push("/");
        }
        catch (error) {
            setError(error.message);
        }
    }
    const onClearAttachment = () => setAttachment("")
    
    const onDelAttachment = async() =>{
        console.log(storeObj[0].menuURL)
            await storageService.refFromURL(storeObj[0].menuURL).delete();
            setAttachment("");
            setNewStoreObj(storeObj=>({...storeObj,menuURL:""}));
        
    }
    const onChange=async(event)=>{
        const{target:{name, value}}=event;
        setNewStoreObj(newStoreObj=>({...newStoreObj,[name]:value}));
    } 
    return (<div className="Container">
    <span className="title">매장정보 수정</span>
    <div className="centerContainer addStore">
        <form onSubmit={onSubmit} className="addStore-form">
            <span>매장명 <span id="require-mark">*</span></span>
            <input type="text"  name="storeName" onChange={onChange} required value={newStoreObj.storeName} />
            <span>지점명 <span id="require-mark">*</span></span>
            <input type="text" name="storeSubName" onChange={onChange} required value={newStoreObj.storeSubName} />
            <span>매장 주소 <span id="require-mark">*</span></span>
            {!isOpen ?
            <span onClick={onPostClick} id="search-box">주소 검색</span>
            : <><span onClick={onPostClick}id="search-box">취소</span><DaumPostCode
                onComplete={handleComplete} className="postCode"
            /></>}
            <span id="address">{newStoreObj.storeAddress}</span>
            <span>영업 시간</span>
            <div className="addStore-form-time">
                
                <input type="text" placeholder="오픈" name="openTime" onChange={onChange} value={newStoreObj.openTime} />
                <span> - </span>
                <input type="text" placeholder="마감" name="closeTime" onChange={onChange} value={newStoreObj.closeTime} />

            </div>
            <span>매장 소개</span>
            <TextareaAutosize placeholder="매장 소개글" name="storeInfo" onChange={onChange} value={newStoreObj.storeInfo} id="textArea"/>
            <span>메뉴 사진</span>
            <input id="attach-Menu" type="file" accept="image/*" onChange={onFileChange} style={{ display: 'none' }}/>
            {!newStoreObj.menuURL ? 
            <>{attachment?
            (<><span id="attachmentDel" onClick={onDelAttachment}>사진 취소</span>
            <img src={attachment} width="100%" /></>)
                                    :<label for="attach-Menu" id="search-box">사진 선택</label>}</>

            : <div className="attachment">
            <span id="attachmentDel" onClick={onDelAttachment}>사진 삭제</span>
            <img src={newStoreObj.menuURL} width="100%" />
        </div>}
        
            <input type="submit" value="수정 완료" />

        </form>
    </div>

</div>);
}
export default EditStore;