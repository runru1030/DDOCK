import REACT, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { dbService } from '../fbase';
const WaitingBox = ({waitingObj, storeObj}) => {

    const onEnterClick=()=>{
        //카톡보내기
        dbService.doc(`ReserveList/${storeObj.id}`).get().then((get)=>{
            dbService.doc(`ReserveList/${storeObj.id}`).update({
                waiting:get.data().waiting.slice(1, get.data().waiting.length)
            })
            dbService.doc(`Stores/${storeObj.id}`).update({
                wait: get.data().waiting.length-1
            })
        })
    }
    return (<>
        <div className="waitingBox" >
                <span>{waitingObj.name}</span>
                
                <span>인원 : {waitingObj.people}</span>
                
                <span>연락처 : {waitingObj.phoneNum}</span>
                <span onClick={onEnterClick} className="enter-btn">입장</span>
        </div>

    </>);

}
export default WaitingBox;