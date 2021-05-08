import REACT, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { authService, dbService } from '../fbase';
import StoreShow from '../components/StoreShow.js'
const HostHome=({hostObj})=>{
    const history=useHistory();
    const [stores, setStores]=useState([]);
    const onAddClick=()=>{
        history.push("/AddStore");
    }
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    }
    useEffect(()=>{
        dbService.collection("Stores").where("hostEmail", "==", hostObj.hostEmail).onSnapshot((Snapshot)=>{
            const storeArr=Snapshot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data(),
            }))
            setStores(storeArr);
        })
    },[])

    return(<>
        <span onClick={onAddClick}>매장 추가</span>
        <span onClick={onLogOutClick}>로그아웃</span>
        <span>나의 매장</span>
        {stores.map((store)=><StoreShow isHost={true} storeObj={store}/>)}
        <div>

        </div>
    </>);
}
export default HostHome;