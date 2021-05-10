import { useEffect, useState } from 'react';
import { authService } from '../fbase';
import initialize from '../initialize';
import AppRouter from './Router';

function App() {
  const [ishost, setIsHost]=useState(false);
  const [isLoggedin ,setIsLoggedin]=useState(false);
  const [init, setInit]=useState(false);
  const [hostObj, setHostObj]=useState({
    hostEmail:"",
    hostId:"",
  })
  useEffect(()=>{
    //initialize();
    authService.onAuthStateChanged(async(user)=>{
      if (user) {
        setIsLoggedin(true);
        setIsHost(true);
        setHostObj({
          hostEmail:user.email,
          hostId:user.uid,
        })
        window.localStorage.setItem("hostObj",JSON.stringify({
          hostEmail:user.email,
          hostId:user.uid,
        }))
      }
      else setIsHost(false);
    
      setInit(true);
    })
    
  },[]);
  console.log(ishost)
  return (<>
   <head><meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no" /></head>
    <head><script src="https://developers.kakao.com/sdk/js/kakao.js"></script></head>
    {init?<AppRouter isLoggedin={isLoggedin} ishost={ishost} hostObj={hostObj}/>:<span>Loading...</span>}
    <footer>&copy; DDOCK {new Date().getFullYear()} by keeper</footer>
    </>
  );
}

export default App;
