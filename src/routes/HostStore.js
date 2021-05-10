import REACT, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { dbService } from '../fbase';
import HostHome from './HostHome';
const HostStore = () => {
    const storeObj =  JSON.parse(window.localStorage.getItem("storeObj")) || 0;
    const [newStoreObj, setNewStoreObj] = useState(()=>JSON.parse(window.localStorage.getItem("storeObj")) || 0);
    const [isEdit, setIsEdit] = useState(false);
    const history = useHistory();
    const onDelClick = () => {
        const ok = window.confirm("매장을 정말 삭제하시겠습니까?");
        if (ok) {
            dbService.doc(`Stores/${storeObj.id}`).delete();
            console.log(storeObj.id);
            history.push("/");
        }

    }
    const onChange = async (event) => {
        const { target: { name, value } } = event;
        setNewStoreObj(newStoreObj => ({ ...newStoreObj, [name]: value }))
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.doc(`Stores/${storeObj.id}`).update({
            remain: newStoreObj.remain,
            wait: newStoreObj.wait,
        })
        setIsEdit(false);
    }
    const ontoggle = () => {
        setIsEdit(prev => !prev);
    }
    const onWaitingClick=()=>{
        history.push({pathname:"/waiting",
            state:{ storeObj:storeObj}});
    }
    const onEditClick=()=>{
        history.push("/editStore");
    }
    return (<div className="Container">
        <div className="centerContainer storeContainer">
            
        <span onClick={onWaitingClick} id="side-menu2">대기 관리</span>
        
        <span id="side-menu3" onClick={onEditClick}>매장정보 수정</span>
            <span id="storeName">{storeObj.storeName}</span>
            <span id="storeSubName">{storeObj.storeSubName}</span>
            <div className="centerContainer waitInfo-wrap">
                <form onSubmit={onSubmit} className="centerContainer">
                    <div className="waitInfo">
                        <div className="waitInfo-span-wrap">
                            <span>여석</span>{isEdit ? <input type="text" value={newStoreObj.remain} onChange={onChange} name="remain" />
                                : <span id="number">{storeObj.remain}</span>}
                            <span id="small">테이블</span>
                        </div>
                        <div className="waitInfo-span-wrap">
                            <span>대기</span>
                            <span id="number">{storeObj.wait}</span>
                            <span id="small">팀</span>
                        </div>
                    </div>

                    {isEdit && <input type="submit" value="변경" />}
                </form>

                {storeObj.wait==0&&<span onClick={ontoggle} className="toggle-btn">{isEdit ? "취소" : <>여석 수정</>}</span>}
            </div>
        </div>

        <span onClick={onDelClick} id="store-del">매장 제거</span>
    </div>);
}
export default HostStore;