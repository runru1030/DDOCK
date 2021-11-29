import REACT, { useState } from 'react';
import { useHistory } from 'react-router';
import { dbService, storageService } from '../fbase';
import TextareaAutosize from "react-textarea-autosize";
import { v4 as uuidv4 } from "uuid";
import PostCode from './PostCode';

const StoreForm = ({ hostObj, isUpdate, store }) => {
    const [storeObj, setStoreObj] = useState(isUpdate ? store : {
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
            if (storeObj.storeAddress == "") new Error("주소를 입력해주세요.");
            let attachmentURL = "";
            if (attachment !== "") {
                const attachmentRef = storageService.ref().child(`${hostObj.hostId}/${uuidv4()}`);
                const response = await attachmentRef.putString(attachment, "data_url");
                attachmentURL = await response.ref.getDownloadURL();
                isUpdate && await dbService.collection("Stores").doc(storeObj.id).update({ ...storeObj, menuURL: attachmentURL });
            }
            else {
                isUpdate && await dbService.collection("Stores").doc(storeObj.id).update({ ...storeObj });
            }
            !isUpdate && await dbService.collection("Stores").add({ ...storeObj, menuURL: attachmentURL });
            window.localStorage.setItem("storeObj", JSON.stringify(storeObj))

            history.push("/");
        }
        catch (error) {
            setError(error.message);
        }
    }
    const onClearAttachment = () => setAttachment("");
    const onDelAttachment = async () => {
        await storageService.refFromURL(storeObj[0].menuURL).delete();
        setAttachment("");
        setStoreObj(storeObj => ({ ...storeObj, menuURL: "" }));
    }
    return (
        <div className="centerContainer aboutStore">
            <form onSubmit={onSubmit} className="aboutStore-form">
                <span>매장명 <span id="require-mark">*</span></span>
                <input type="text" placeholder="매장명" name="storeName" onChange={onChange} required value={storeObj.storeName} />

                <span>지점명 <span id="require-mark">*</span></span>
                <input type="text" placeholder="지점명" name="storeSubName" onChange={onChange} required value={storeObj.storeSubName} />

                <span>매장 주소 <span id="require-mark">*</span></span>
                {!isOpen ?
                    <span onClick={onPostClick} id="search-box">주소 검색</span>
                    : <PostCode setIsOpen={setIsOpen} setStoreObj={setStoreObj} />}
                <span id="address">{storeObj.storeAddress}</span>

                <span>영업 시간</span>
                <div className="aboutStore-form-time">
                    <input type="time" placeholder="오픈" name="openTime" onChange={onChange} value={storeObj.openTime} />
                    <span> - </span>
                    <input type="time" placeholder="마감" name="closeTime" onChange={onChange} value={storeObj.closeTime} />
                </div>

                <span>매장 연락처</span>
                <input type="tel" name="storeCall" onChange={onChange} required value={storeObj.storeCall} placeholder="00*-000*-0000" pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}" maxlength="13" />

                <span>매장 소개</span>
                <TextareaAutosize placeholder="매장 소개글" name="storeInfo" onChange={onChange} value={storeObj.storeInfo} id="textArea" />

                <span>메뉴 사진</span>
                <input id="attach-Menu" type="file" accept="image/*" onChange={onFileChange} style={{ display: 'none' }} />
                {isUpdate && storeObj.menuURL ?
                    <div className="attachment">
                        <span id="attachmentDel" onClick={onDelAttachment}>사진 삭제</span>
                        <img src={storeObj.menuURL} width="100%" />
                    </div> :
                    <>{attachment ?
                        (<><span id="attachmentDel" onClick={onClearAttachment}>사진 취소</span>
                            <img src={attachment} width="100%" /></>)
                        :
                        <label for="attach-Menu" id="search-box">사진 선택</label>}</>}
                <span id="error">{error}</span>
                <input type="submit" value={isUpdate ? "수정 완료" : "매장 등록"} />

            </form>
        </div>);
}

export default StoreForm;