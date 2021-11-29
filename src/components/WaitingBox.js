import axios from 'axios';
import { dbService } from '../fbase';
const WaitingBox = ({ waitingObj, storeObj }) => {

    const onEnterClick = () => {
        axios.get(`/sms/${waitingObj.phoneNum}/${storeObj.storeName}`).then(res => console.log(res.data));
        dbService.doc(`ReserveList/${storeObj.id}`).get().then((get) => {
            dbService.doc(`ReserveList/${storeObj.id}`).update({
                waiting: get.data().waiting.slice(1, get.data().waiting.length)
            })
            dbService.doc(`Stores/${storeObj.id}`).update({
                wait: get.data().waiting.length - 1
            })
        });
    }
    return (<>
        <div className="box-container waitingBox" >
            <span>{waitingObj.name}</span>
            <span>인원 : {waitingObj.people}</span>
            <span>연락처 : {waitingObj.phoneNum}</span>
            <span id="time">{waitingObj.createAtTime}</span>
            <span onClick={onEnterClick} className="enter-btn">입장</span>
        </div>

    </>);

}
export default WaitingBox;