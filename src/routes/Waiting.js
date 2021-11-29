import REACT, { useEffect, useState } from 'react';
import { dbService } from '../fbase';
import WaitingBox from '../components/WaitingBox';

const Waiting = () => {
    const storeObj = JSON.parse(window.localStorage.getItem("storeObj")) || 0;
    const [waitingArr, setWaitingArr] = useState([]);
    useEffect(() => {
        dbService.doc(`ReserveList/${storeObj.id}`).onSnapshot((Snapshot) => {
            if (Snapshot.exists) {
                setWaitingArr(Snapshot.data().waiting);
            }
        });
    },[]);
    return (<>
        <div className="Container">
            <span className="title">대기 리스트</span>
            <span id="waiting-count">대기 {waitingArr.length}팀</span>
            {waitingArr.map((waiting) => <WaitingBox waitingObj={waiting} storeObj={storeObj} />)}
            {!waitingArr.length && <span className="waiting-ment">대기자가 없습니다.</span>}
        </div>
    </>);

}
export default Waiting;