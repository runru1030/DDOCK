import REACT, { useEffect, useState } from 'react';
import MapContainer from '../components/MapContainer';
import { dbService } from '../fbase';
const GuestStore = () => {
    const [storeObj, setStoreObj] = useState(() => JSON.parse(window.localStorage.getItem("storeObj")) || 0);
    const [isReserve, setIsReserve] = useState(false);
    const [customer, setCustomer] = useState({
        name: "",
        people: "",
        phoneNum: "",
        createAtTime: "",
    });

    useEffect(() => {
        dbService.doc(`Stores/${storeObj.id}`).onSnapshot((snapshot) => {
            window.localStorage.setItem("storeObj", JSON.stringify({ ...snapshot.data(), id: snapshot.id }))
            setStoreObj({ ...snapshot.data(), id: snapshot.id });
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
        const date = new Date();
        await dbService.doc(`Stores/${storeObj.id}`).update({
            wait: storeObj.wait + 1
        })
        await dbService.collection("ReserveList").doc(storeObj.id).get().then(async (get) => {
            if (get.exists) {
                await dbService.collection("ReserveList").doc(storeObj.id).set({
                    waiting: [...get.data().waiting, { ...customer, createAtTime: `${date.getHours()}:${date.getMinutes()}` }]
                })
            }
            else {
                await dbService.collection("ReserveList").doc(storeObj.id).set({
                    waiting: [{ ...customer, createAtTime: `${date.getHours()}:${date.getMinutes()}` }]
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

    return (<>
        <div className="Container">
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
                {isReserve && <>
                    <div className="centerContainer reserve-wrap">
                        <form onSubmit={onSubmit} className="centerContainer">
                            <div>
                                <div className="reserve-input"><span>이름</span><input type="text" name="name" required value={customer.name} onChange={onChange} />
                                </div>
                                <div className="reserve-input"><span>인원</span><input type="tel" placeholder="명" name="people" required value={customer.people} onChange={onChange} /></div>
                                <div className="reserve-input phone"><span>연락처</span><input type="tel" maxLength="11" placeholder="(-)없이 입력" name="phoneNum" required value={customer.phoneNum} onChange={onChange} />
                                </div>
                            </div>
                            <input className="blue-button" type="submit" value="예약" />
                        </form>
                        <span className="ment">입장 문자 발송 후, 5분이내로 입장하지 않으면 자동 취소됩니다.</span>
                    </div>
                </>}
            </div>

            <div className="storeinfo">
                <span id="title">매장 위치</span>
                <span>{storeObj.storeAddress}</span>
                <MapContainer />
                <hr />
                
                <span id="title">매장 연락처</span>
                <span>{storeObj.storeCall}<span><a className="blue-button" id="call-link" href={`tel:${storeObj.storeCall}`}>전화걸기</a></span></span>
                <hr />
                
                <span id="title">매장 소개글</span>
                <span>{storeObj.storeInfo}</span>
                <hr />
                
                <span id="title">영업 시간</span>
                <span>오픈 : {storeObj.openTime} - 마감 : {storeObj.closeTime}</span>
                <hr />

                <span id="title">메뉴판 사진</span>
                <span>{storeObj.menuURL ? <img width="350px" src={storeObj.menuURL} /> : "."}</span>
            </div>
        </div>
    </>);
}
export default GuestStore;