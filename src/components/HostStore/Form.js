import REACT, { useState } from 'react';
import { dbService } from '../../fbase';
const Form = () => {
    const storeObj = JSON.parse(window.localStorage.getItem("storeObj")) || 0;
    const [newStoreObj, setNewStoreObj] = useState(storeObj);
    const [isEdit, setIsEdit] = useState(false);

    const onChange = async (event) => {
        const { target: { name, value } } = event;
        setNewStoreObj(newStoreObj => ({ ...newStoreObj, [name]: value }));
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.doc(`Stores/${storeObj.id}`).update({
            remain: newStoreObj.remain,
            wait: newStoreObj.wait,
        })
        setIsEdit(false);
    }
    const ontoggle = () => {
        setIsEdit(prev => !prev);
    }
    return (
        <div className="centerContainer waitInfo-wrap">
            <form onSubmit={onSubmit} className="centerContainer">
                <div className="waitInfo">
                    <div className="waitInfo-span-wrap">
                        <span>여석</span>{isEdit ? <input type="text" value={newStoreObj.remain} onChange={onChange} name="remain" />
                            : <span id="number">{storeObj.remain}</span>}
                        <span id="small">테이블</span>
                    </div>
                    <div className="waitInfo-span-wrap">
                        <span>대기</span>
                        <span id="number">{storeObj.wait}</span>
                        <span id="small">팀</span>
                    </div>
                </div>
                {isEdit && <input type="submit" value="변경" />}
            </form>

            {storeObj.wait == 0 && <span onClick={ontoggle} className="toggle-btn">{isEdit ? "취소" : <>여석 수정</>}</span>}
        </div>
    );
}
export default Form;