import REACT, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { dbService } from '../fbase';
import HostHome from './HostHome';

const GuestStore = () => {
    const [storeObj, setStoreObj] = useState(()=>JSON.parse(window.localStorage.getItem("storeObj")) || 0);
    const [isReserve, setIsReserve] = useState(false);
    const [customer, setCustomer] = useState({
        name: "",
        people: "",
        phoneNum: "",
    });
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
        await dbService.collection("ReserveList").doc(storeObj.id).get().then(async (get) => {
            if (get.exists) {
                await dbService.collection("ReserveList").doc(storeObj.id).set({
                    waiting: [...get.data().waiting, customer]
                })
            }
            else {
                await dbService.collection("ReserveList").doc(storeObj.id).set({
                    waiting: [customer]
                })
            }
        });
        setCustomer({
            name: "",
            people: "",
            phoneNum: "",
        });
        setIsReserve(false);
    }
    return (<div className="Container">
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


            <span onClick={ontoggle} id="reserve">{isReserve ? "취소" : "예약하기"}</span>
            {isReserve && <>
                <div className="centerContainer reserve-wrap">
                    <form onSubmit={onSubmit} className="centerContainer">
                        <div>
                            <div className="reserve-input"><span>이름</span><input type="text" name="name" value={customer.name} onChange={onChange} />
                            </div>
                            <div className="reserve-input"><span>인원</span><input type="text" placeholder="명" name="people" value={customer.people} onChange={onChange} /></div>
                            <div className="reserve-input phone"><span>연락처</span><input type="text" placeholder="(-) 생략" name="phoneNum" value={customer.phoneNum} onChange={onChange} />
                            </div>
                        </div>
                        <input type="submit" value="예약" />
                    </form>
                    <span className="ment">대기자가 없을 시, 5분이내로 입장하지 않으면 자동 취소됩니다.</span>

                </div>

            </>}
        </div>
        <div className="storeinfo">
            <span id="title">매장 위치</span>
            <span>{storeObj.storeAddress}</span>
            <hr />

            <span id="title">매장 소개글</span>
            <span>{storeObj.storeInfo}</span>
            <hr />
            <span id="title">영업 시간</span>

            <span>open : {storeObj.openTime} - close : {storeObj.closeTime}</span>
            <hr />

            <span id="title">메뉴판 사진</span>
            <span>{storeObj.menuURL ? <img width="350px" src={storeObj.menuURL} /> : "."}</span>
        </div>
    </div>);
}
export default GuestStore;