import REACT, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Form from '../components/HostStore/Form';
import { dbService } from '../fbase';
const HostStore = () => {
    const [storeObj, setStoreObj] = useState(() => JSON.parse(window.localStorage.getItem("storeObj")) || 0)
    const history = useHistory();

    useEffect(() => {
        dbService.doc(`Stores/${storeObj.id}`).onSnapshot((snapshot) => {
            window.localStorage.setItem("storeObj", JSON.stringify({ ...snapshot.data(), id: snapshot.id }))
            console.log(snapshot.data())
            setStoreObj({ ...snapshot.data(), id: snapshot.id });
        });
    }, []);

    const onDelClick = () => {
        const ok = window.confirm("매장을 정말 삭제하시겠습니까?");
        if (ok) {
            dbService.doc(`Stores/${storeObj.id}`).delete();
            dbService.doc(`ReserveList/${storeObj.id}`).delete();
            history.push("/");
        }
    }

    const onWaitingClick = () => {
        history.push("/host/waiting");
    }
    const onEditClick = () => {
        history.push("/host/editStore");
    }
    return (
        <div className="Container">
            <div className="centerContainer storeContainer">
                <span onClick={onWaitingClick} id="side-menu2">대기 관리</span>
                <span id="side-menu3" onClick={onEditClick}>매장정보 수정</span>

                <span id="storeName">{storeObj.storeName}</span>
                <span id="storeSubName">{storeObj.storeSubName}</span>

                <Form/>
            </div>

            <span onClick={onDelClick} id="store-del">매장 제거</span>
        </div>);
}
export default HostStore;