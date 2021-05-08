import REACT, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { dbService } from '../fbase';
import HostHome from './HostHome';

const GuestStore = () => {
    const [storeObj, setStoreObj] = useState([]);
    const [isReserve, setIsReserve] = useState(false);
    const [customer, setCustomer] = useState({
        name: "",
        people: "",
        phoneNum: "",
    });
    const location = useLocation();
    useEffect(() => {
        const getStoreObj = location.state.storeObj;
        dbService.doc(`Stores/${getStoreObj.id}`).onSnapshot((Snaoshot) => {

            setStoreObj({ ...Snaoshot.data(), id: Snaoshot.id });
        })

    }, [])
    const ontoggle = () => {
        setIsReserve(prev => !prev);
    }
    const onChange = async (event) => {
        const { target: { name, value } } = event;
        setCustomer(customer => ({ ...customer, [name]: value }))
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        if (storeObj.remain != 0) {
            await dbService.doc(`Stores/${storeObj.id}`).update({
                remain: storeObj.remain - 1
            })
        } else {
            await dbService.doc(`Stores/${storeObj.id}`).update({
                wait: storeObj.wait + 1
            })
        }
        setIsReserve(false);
    }
    return (<div className="Container">
        <div className="centerContainer storeContainer">

            <span id="storeName">{storeObj.storeName}</span>
            <span id="storeSubName">{storeObj.storeSubName}</span>
            <div className="waitInfo">
                <span>여석<span id="number">{storeObj.remain}</span><span id="small">테이블</span></span>
                <span>대기<span id="number">{storeObj.wait}</span><span id="small">팀</span></span>
            </div>


            <span onClick={ontoggle} id="reserve">{isReserve ? "취소" : "예약하기"}</span>
            {isReserve && <>
                <span>대기자가 없을 시, 5분이내로 입장하지 않으면 자동 취소됩니다.</span>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="이름" name="name" value={customer.name} onChange={onChange} />
                    <input type="text" placeholder="인원" name="name" value={customer.people} onChange={onChange} />
                    <input type="text" placeholder="전화번호(-없이)" name="phoneNum" value={customer.phoneNum} onChange={onChange} />
                    <input type="submit" value="예약" />
                </form>
            </>}
        </div>
        <div className="storeinfo">
        <span id="title">매장 소개글</span>
            <span>{storeObj.storeInfo}</span>
            <hr />
            <span id="title">매장 위치</span>
            <span>{storeObj.storeAddress}</span>
            <hr />
            <span id="title">영업 시간</span>
            
            <span>{storeObj.openTime}-{storeObj.closeTime}</span>
            <hr />
            
            <span id="title">메뉴판 사진</span>
            <span>{storeObj.storeAddress}</span>
        </div>
    </div>);
}
export default GuestStore;