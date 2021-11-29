import REACT, { useState } from 'react';
import { authService, } from '../../fbase';
const Host = () => {
    const [isJoin, setIsJoin] = useState(false);
    const [joinObj, setJoinObj] = useState({
        email: "",
        password: ""
    })
    const [errorMess, setErrorMess] = useState("");

    const onJoinClick = () => {
        setIsJoin((prev) => !prev);
        setErrorMess("");
    }

    const onChange = async (event) => {
        const { target: { name, value } } = event;
        setJoinObj(joinObj => ({ ...joinObj, [name]: value }));
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
    return (
            <div className="centerContainer hostContainer">
                <img src="logo.png" width="200px" />
                <form onSubmit={onSubmit} className="centerContainer">
                    <input type="text" name="email" placeholder="이메일" onChange={onChange} required value={joinObj.email} />
                    <input type="password" name="password" placeholder="비밀번호" onChange={onChange} required value={joinObj.password} />
                    <input type="submit" value={isJoin ? "가입" : "로그인"} />
                </form>
                <span id="error">{errorMess}</span>
                <span onClick={onJoinClick} id="toggle">{isJoin ? "로그인" : "호스트 가입"}</span>
            </div>

    );
}
export default Host;