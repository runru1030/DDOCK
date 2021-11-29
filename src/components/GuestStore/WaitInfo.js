import REACT, { useEffect, useState } from 'react';
import { dbService } from '../../fbase';
import Form from './Form';
const WaitInfo = () => {
    const storeObj= JSON.parse(window.localStorage.getItem("storeObj")) || 0;
    const [isReserve, setIsReserve] = useState(false);
    const ontoggle = () => {
        setIsReserve(prev => !prev);
    }

    return (
        <div className="centerContainer storeContainer">
            <span id="storeName">{storeObj.storeName}</span>
            <span id="storeSubName">{storeObj.storeSubName}</span>

            <div className="waitInfo">
                <div className="waitInfo-span-wrap">
                    <span>여석</span>
                    <span id="number">{storeObj.remain}</span>
                    <span id="small">테이블</span>
                </div>
                <div className="waitInfo-span-wrap">
                    <span>대기</span>
                    <span id="number">{storeObj.wait}</span>
                    <span id="small">팀</span>
                </div>
            </div>
            {storeObj.remain == 0 && <span onClick={ontoggle} className="blue-button" id="reserve">{isReserve ? "취소" : "예약하기"}</span>}
            {isReserve &&<Form storeObj={storeObj}/>}
        </div>
    );
}
export default WaitInfo;