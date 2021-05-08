import REACT, { useState } from 'react';
import { useHistory } from 'react-router';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const StoreShow=({isHost, storeObj})=>{
    const history=useHistory();
    const onStoreClick = () => {
        if(isHost){
            history.push({
                pathname: "/hostStore",
                state: { storeObj: storeObj }
            });
        }else{
            history.push({
                pathname: "/guestStore",
                state: { storeObj: storeObj }
            });
        }
             
    }
    return(<>
        
        <div className="storeBox">
            <span>{storeObj.storeName}</span>
            <span id="subName">{storeObj.storeSubName}</span>
            <span id="go" onClick={onStoreClick}><FontAwesomeIcon icon={faChevronRight}/></span>
        </div>
       
    </>);
}
export default StoreShow;