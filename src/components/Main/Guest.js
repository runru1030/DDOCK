import REACT, { useEffect, useState } from 'react';
import StoreBox from '../StoreBox';
import { dbService } from '../../fbase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
const Guest = () => {
    const [search, setSerch] = useState("");
    const [stores, setStores] = useState([]);

    const onChange = async (event) => {
        const { target: { value } } = event;
        setSerch(value);
    }
    useEffect(() => {
        if (search) {
            dbService.collection("Stores").onSnapshot((Snapshot) => {
                const storeArr = Snapshot.docs.filter((doc) => doc.data().storeName.indexOf(search) == 0).map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                setStores(storeArr);
            })
        }
    })
    return (
        <>
            <div className="centerContainer guestContainer">
                <div className="centerContainer search">
                    <img src="logo.png" width="200px" />
                    <input type="text" placeholder="매장명" name="search" value={search} onChange={onChange} />
                </div>
            </div>

            {!stores.length ? <>
                {search == "" ?
                    <div className="centerContainer guest-search-ment">
                        <span>매장명을 검색해보세요</span>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    :
                    <div className="centerContainer guest-search-ment" id="nothing-ment">
                        <span>검색결과가 없습니다</span>
                        <FontAwesomeIcon icon={faQuestionCircle} width="50px" />
                    </div>}
            </> : <div className="storeShow">{stores.map((store) => <StoreBox storeObj={store} isHost={false} />)}</div>}
        </>);
}
export default Guest;