import REACT, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { authService, dbService } from '../fbase';
import StoreBox from '../components/StoreBox.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const HostHome = ({ hostObj }) => {
    const history = useHistory();
    const [stores, setStores] = useState([]);
    const onAddClick = () => {
        history.push("/host/addStore");
    }
    const onLogOutClick = () => {
        window.localStorage.removeItem("hostObj");
        authService.signOut();
        history.push("/");
    }

    useEffect(() => {
        window.localStorage.removeItem("storeObj");
        dbService.collection("Stores").where("hostEmail", "==", hostObj.hostEmail).onSnapshot((Snapshot) => {
            const storeArr = Snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setStores(storeArr);
        })
    })

    return (<><div className="Container">
        <div className="centerContainer title hostHome">
            <span onClick={onLogOutClick} id="side-menu">로그아웃</span>
            <span>나의 매장</span>
        </div>

        {stores.map((store) => <StoreBox isHost={true} storeObj={store} />)}

        <span onClick={onAddClick} className="blue-button" id="add-btn">매장 추가 <FontAwesomeIcon icon={faPlus} /></span>

    </div>

    </>);
}
export default HostHome;