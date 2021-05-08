import REACT, { useState } from 'react';
import DaumPostCode from 'react-daum-postcode';
import { useHistory } from 'react-router';
import { dbService } from '../fbase';
const AddStore =({hostObj})=>{
    const [storeObj, setStoreObj]=useState({
       storeName:"",
       storeSubName:"",
       storeAddress:"",
       openTime:"",
       closeTime:"",
       storeInfo:"",
       remain:0,
       wait:0,
       hostEmail:hostObj.hostEmail,
    });
    const [isOpen, setIsOpen]=useState(false);
    const [error, setError]=useState("");
    const history=useHistory();
    const onFileChange = (event) => {
        const { target: { files } } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const { currentTarget: { result } } = finishedEvent;
        };
        reader.readAsDataURL(theFile);
    };
    const handleComplete = (data) => {
      let fullAddress = data.address;
      let extraAddress = ''; 
      
      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
          extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
        }
        fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
      }
  
      console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
      setIsOpen(false);
      setStoreObj(storeObj=>({...storeObj,storeAddress:fullAddress}))
    }
    const onPostClick=()=>{
        setIsOpen(true);
    }
    const onChange=async(event)=>{
        const {target:{name, value}}=event;
        setStoreObj(storeObj=>({...storeObj,[name]:value}));
    }
    const onSubmit=async(event)=>{
        event.preventDefault();
        try{
            await dbService.collection("Stores").add(storeObj);
            
            history.push("/");
            
  
        }
        catch(error){
            setError(error);
        }
    }
    return(<div>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="매장명" name="storeName" onChange={onChange} required value={storeObj.storeName}/>
            <input type="text" placeholder="지점명" name="storeSubName" onChange={onChange} required value={storeObj.storeSubName}/>
            <span onClick={onPostClick}>매장 주소 검색</span>
            {isOpen&&<DaumPostCode
        onComplete={handleComplete}
      />}
            
            <input type="text" placeholder="오픈 시간" name="openTime" onChange={onChange} value={storeObj.openTime}/>
            <input type="text" placeholder="마감 시간" name="closeTime" onChange={onChange} value={storeObj.closeTime}/>
            <input type="text" placeholder="매장 소개" name="storeInfo" onChange={onChange} value={storeObj.storeInfo}/>
            <input id="attach-Menu" type="file" accept="image/*" onChange={onFileChange} />
            <input type="submit" value="매장 등록"/>
            
        </form>
    </div>);
}

export default AddStore;