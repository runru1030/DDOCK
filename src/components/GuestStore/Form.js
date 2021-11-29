import REACT, { useEffect, useState } from 'react';
import { dbService } from '../../fbase';
const Form = ({storeObj}) => {
    const [customer, setCustomer] = useState({
        name: "",
        people: "",
        phoneNum: "",
        createAtTime: "",
    });
    const onChange = (event) => {
        const { target: { name, value } } = event;
        setCustomer(customer => ({ ...customer, [name]: value }));
    }
    const onSubmit = async(event) => {
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
    }

    return (
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
    );
}
export default Form;