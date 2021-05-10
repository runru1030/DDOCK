import REACT, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { dbService } from '../fbase';
import WaitingBox from '../components/WaitingBox';
const Waiting = () => {
    const [waitingArr, setWaitingArr] = useState([]);
    const [storeObj, setStoreObj] = useState([]);
    const location = useLocation();
    useEffect(() => {
        const getStoreObj = location.state.storeObj;
        setStoreObj(getStoreObj);
        dbService.doc(`ReserveList/${getStoreObj.id}`).onSnapshot((Snapshot) => {
            if(Snapshot.exists){
                
            setWaitingArr(Snapshot.data().waiting)
            }
        })
    })
    return (<>
        <div className="Container">
            <span className="title">대기 리스트</span>
            <span id="waiting-count">대기 {waitingArr.length}팀</span>
            {waitingArr.map((waiting)=>
                <WaitingBox waitingObj={waiting} storeObj={storeObj}/>
            )}
            {!waitingArr.length&&<>
                    <span className="waiting-ment">대기자가 없습니다.</span>
                
            </>}
        </div>


    </>);

}
export default Waiting;