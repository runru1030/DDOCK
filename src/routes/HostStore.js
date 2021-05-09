import REACT, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { dbService } from '../fbase';
import HostHome from './HostHome';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
const HostStore = () => {
    const [storeObj, setStoreObj] = useState([]);
    const [newStoreObj, setNewStoreObj] = useState({
        remain: 0,
        wait: 0,
    });
    const [isEdit, setIsEdit] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const getStoreObj = location.state.storeObj;
        dbService.doc(`Stores/${getStoreObj.id}`).onSnapshot((Snaoshot) => {

            setStoreObj(Snaoshot.data());
        })
    })
    const onDelClick = () => {
        const ok = window.confirm("매장을 정말 삭제하시겠습니까?");
        if (ok) {
            dbService.doc(`Stores/${storeObj.id}`).delete();
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
    return (<div className="Container">
        <div className="centerContainer storeContainer">
            <span id="storeName">{storeObj.storeName}</span>
            <span id="storeSubName">{storeObj.storeSubName}</span>
            <div className="centerContainer waitInfo-wrap">
                <form onSubmit={onSubmit}>
                    <div className="waitInfo">
                        <span>여석{isEdit ? <input type="text" value={newStoreObj.remain} onChange={onChange} name="remain" /> : <span id="number">{storeObj.remain}</span>}<span id="small">테이블</span></span>
                        <span>대기<span id="number">{storeObj.wait}</span><span id="small">팀</span></span>
                    </div>

                    {isEdit && <input type="submit" value="변경" />}
                </form>

                <span onClick={ontoggle}>{isEdit ? "취소" : <>여석 수정</>}</span>
                <span>매장정보 수정 <FontAwesomeIcon icon={faPen} /></span>
            </div>
        </div>

        <span onClick={onDelClick} id="store-del">매장 제거</span>
    </div>);
}
export default HostStore;