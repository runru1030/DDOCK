import REACT, { useState } from 'react';
import DaumPostCode from 'react-daum-postcode';
import { useHistory } from 'react-router';
import { dbService, storageService } from '../fbase';
import TextareaAutosize from "react-textarea-autosize";
import { v4 as uuidv4 } from "uuid";

const AddStore = ({ hostObj }) => {
    const [storeObj, setStoreObj] = useState({
        storeName: "",
        storeSubName: "",
        storeAddress: "",
        storeCall: "",
        openTime: "",
        closeTime: "",
        storeInfo: "",
        menuURL: "",
        remain: 0,
        wait: 0,
        hostEmail: hostObj.hostEmail,
    });
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState("");
    const [address, setAddress] = useState("");
    const [attachment, setAttachment] = useState();
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
        setAddress(fullAddress);
        setIsOpen(false);
        setStoreObj(storeObj => ({ ...storeObj, storeAddress: fullAddress }))
    }
    const onPostClick = () => {
        setIsOpen(prev => !prev);
    }
    const onChange = async (event) => {
        const { target: { name, value } } = event;
        setStoreObj(storeObj => ({ ...storeObj, [name]: value }));
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            if (address == "") new Error("주소를 입력해주세요.");
            let attachmentURL = "";
            if (attachment !== "") {
                const attachmentRef = storageService.ref().child(`${hostObj.hostId}/${uuidv4()}`);
                const response = await attachmentRef.putString(attachment, "data_url");
                attachmentURL = await response.ref.getDownloadURL();
            }
            await dbService.collection("Stores").add({ ...storeObj, menuURL: attachmentURL });

            history.push("/");
        }
        catch (error) {
            setError(error.message);
        }
    }

    const onClearAttachment = () => setAttachment("");

    return (
    <div className="Container">
        <span className="title">나의 매장 등록 </span>
        <div className="centerContainer aboutStore">
            <form onSubmit={onSubmit} className="aboutStore-form">
                <span>매장명 <span id="require-mark">*</span></span>
                <input type="text" placeholder="매장명" name="storeName" onChange={onChange} required value={storeObj.storeName} />
                
                <span>지점명 <span id="require-mark">*</span></span>
                <input type="text" placeholder="지점명" name="storeSubName" onChange={onChange} required value={storeObj.storeSubName} />
                
                <span>매장 주소 <span id="require-mark">*</span></span>
                {!isOpen ?
                    <span onClick={onPostClick} id="search-box">주소 검색</span>
                    : <><span onClick={onPostClick} id="search-box">취소</span><DaumPostCode
                        onComplete={handleComplete} className="postCode"
                    /></>}
                <span id="address">{address}</span>
                
                <span>영업 시간</span>
                <div className="aboutStore-form-time">
                    <input type="tel" placeholder="오픈" name="openTime" onChange={onChange} value={storeObj.openTime} />
                    <span> - </span>
                    <input type="tel" placeholder="마감" name="closeTime" onChange={onChange} value={storeObj.closeTime} />
                </div>

                <span>매장 연락처</span>
                <input type="tel" name="storeCall" onChange={onChange} required value={storeObj.storeCall} />
                
                <span>매장 소개</span>
                <TextareaAutosize placeholder="매장 소개글" name="storeInfo" onChange={onChange} value={storeObj.storeInfo} id="textArea" />
                
                <span>메뉴 사진</span>
                {!attachment && <label for="attach-Menu" id="search-box">사진 선택</label>}
                <input id="attach-Menu" type="file" accept="image/*" onChange={onFileChange} style={{ display: 'none' }} />
                {attachment && <div className="attachment">
                    <span id="attachmentDel" onClick={onClearAttachment}>사진 취소</span>
                    <img src={attachment} width="100%" />
                </div>}
                <span id="error">{error}</span>
                <input type="submit" value="매장 등록" />

            </form>
        </div>
    </div>);
}

export default AddStore;