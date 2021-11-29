import REACT, { useEffect, useState } from 'react';
import StoreInfo from '../components/GuestStore/StoreInfo';
import WaitInfo from '../components/GuestStore/WaitInfo';
import { dbService } from '../fbase';
const GuestStore = () => {
    const [storeObj, setStoreObj] = useState(() => JSON.parse(window.localStorage.getItem("storeObj")) || 0);

    useEffect(() => {
        dbService.doc(`Stores/${storeObj.id}`).onSnapshot((snapshot) => {
            window.localStorage.setItem("storeObj", JSON.stringify({ ...snapshot.data(), id: snapshot.id }))
            setStoreObj({ ...snapshot.data(), id: snapshot.id });
        })
    }, [])

    return (
        <div className="Container">
            <WaitInfo />
            <StoreInfo />
        </div>
    );
}
export default GuestStore;