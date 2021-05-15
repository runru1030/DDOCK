import REACT, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import StoreBox from '../components/StoreBox';
import { authService, dbService } from '../fbase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt, faSearch, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
const Main = () => {
    const [isHost, setIsHost] = useState(false);
    const [isJoin, setIsJoin] = useState(false);
    const [joinObj, setJoinObj] = useState({
        email: "",
        password: ""
    })
    const [search, setSerch] = useState("");
    const [stores, setStores] = useState([]);
    const [errorMess, setErrorMess] = useState("");
    const onSelectClick = () => {
        setIsHost((prev) => !prev);
        setErrorMess("");
    }
    const onJoinClick = () => {
        setIsJoin((prev) => !prev);
        setErrorMess("");
    }

    const onChange = async (event) => {
        const { target: { name, value } } = event;
        if (name == "search") {
            setSerch(value);
        }
        else setJoinObj(joinObj => ({ ...joinObj, [name]: value }));
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (isJoin) {
                data = await authService.createUserWithEmailAndPassword(joinObj.email, joinObj.password);
            }
            else {
                data = await authService.signInWithEmailAndPassword(joinObj.email, joinObj.password);
            }
        }
        catch (error) {
            setErrorMess(error.message);
        }
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
    return (<>
        <div className="Container">
            {isHost ?
                <>
                    <span id="changeSpan" onClick={onSelectClick}><FontAwesomeIcon icon={faExchangeAlt} /> {isHost ? "게스트" : "호스트"}</span>

                    <div className="centerContainer hostContainer">

                        <img src="src/images/logo.png" width="200px" />
                        <form onSubmit={onSubmit} className="centerContainer">
                            <input type="text" name="email" placeholder="이메일" onChange={onChange} required value={joinObj.email} />
                            <input type="password" name="password" placeholder="비밀번호" onChange={onChange} required value={joinObj.password} />
                            <input type="submit" value={isJoin ? "가입" : "로그인"} />
                        </form>
                        <span id="error">{errorMess}</span>
                        <span onClick={onJoinClick} id="toggle">{isJoin ? "로그인" : "호스트 가입"}</span>
                    </div>

                </>
                :
                <>

                    <span id="changeSpan" onClick={onSelectClick}><FontAwesomeIcon icon={faExchangeAlt} /> {isHost ? "게스트" : "호스트"}</span>
                    <div className="centerContainer guestContainer">
                        <div className="centerContainer search">
                            <img src="src/images/logo.png" width="200px" />
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
                </>
            }
        </div>

    </>);
}
export default Main;