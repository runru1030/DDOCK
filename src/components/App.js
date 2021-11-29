import { useEffect, useState } from 'react';
import { authService } from '../fbase';
import AppRouter from './Router';

function App() {
  const [ishost, setIsHost] = useState(false);
  const [init, setInit] = useState(false);
  const [hostObj, setHostObj] = useState({
    hostEmail: "",
    hostId: "",
  })
  useEffect(() => {
    authService.onAuthStateChanged(async (user) => {
      if (user) {
        setIsHost(true);
        setHostObj({
          hostEmail: user.email,
          hostId: user.uid,
        })
        window.localStorage.setItem("hostObj", JSON.stringify({
          hostEmail: user.email,
          hostId: user.uid,
        }))
      }
      else setIsHost(false);

      setInit(true);
    })

  }, []);

  return (<>
    {init ? <AppRouter ishost={ishost} hostObj={hostObj} /> : <span id="loading">Loading...</span>}
    <footer>&copy; DDOCK {new Date().getFullYear()} by keeper</footer>
  </>
  );
}

export default App;
