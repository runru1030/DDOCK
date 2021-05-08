import REACT, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { dbService } from '../fbase';
import HostHome from './HostHome';

const HostStore=()=>{
    const [storeObj,setStoreObj]=useState([]);
    const [newStoreObj,setNewStoreObj]=useState({
        remain:0,
        wait:0,
    });
    const [isEdit, setIsEdit]=useState(false);
    const location=useLocation();
    useEffect(()=>{
        const getStoreObj=location.state.storeObj;
        dbService.doc(`Stores/${getStoreObj.id}`).onSnapshot((Snaoshot)=>{
          
         setStoreObj(Snaoshot.data());  
        })
    })
    const onDelClick=()=>{
        const ok = window.confirm("매장을 정말 삭제하시겠습니까?");
        if(ok){
            dbService.doc(`Stores/${storeObj.id}`).delete();
        }
    }
    const onChange=async(event)=>{
        const {target:{name, value}}=event;
        setNewStoreObj(newStoreObj=>({...newStoreObj, [name]:value}))
    }
    const onSubmit=async(event)=>{
        event.preventDefault();
        await dbService.doc(`Stores/${storeObj.id}`).update({
            remain: newStoreObj.remain,
            wait:newStoreObj.wait,
        })
        setIsEdit(false);
    }
    const ontoggle=()=>{
        setIsEdit(prev=>!prev);
    }
    return(<div>
        <span>{storeObj.storeName}</span>
        <span>{storeObj.storeSubName}</span>
        <div>
            <form onSubmit={onSubmit}>
            <span>여석{isEdit?<input type="text" value={newStoreObj.remain} onChange={onChange} name="remain"/>:storeObj.remain}테이블</span>
            
            <span>대기{storeObj.wait}명</span>
            {isEdit&&<input type="submit" value="변경"/>}
            <span onClick={ontoggle}>{isEdit?"취소":"내용수정"}</span>
            </form>
            
        </div>
        <span onClick={onDelClick}>매장 제거</span>
    </div>);
}
export default HostStore;