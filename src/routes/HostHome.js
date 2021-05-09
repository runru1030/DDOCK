import REACT, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { authService, dbService } from '../fbase';
import StoreShow from '../components/StoreShow.js'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
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
    })

    return(<><div className="Container">
        <div className="centerContainer title hostHome">
        
            <span onClick={onLogOutClick} id="side-menu"><FontAwesomeIcon icon={faSignOutAlt}/></span>
        <span>나의 매장</span>
        
        </div>
        
        {stores.map((store)=><StoreShow isHost={true} storeObj={store}/>)}
        
        <span onClick={onAddClick}id="add-btn">매장 추가 <FontAwesomeIcon icon={faPlus}/></span>
    
    </div>
   
    </>);
}
export default HostHome;