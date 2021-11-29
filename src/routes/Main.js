import REACT, {useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt} from "@fortawesome/free-solid-svg-icons";
import Host from '../components/Main/Host';
import Guest from '../components/Main/Guest';
const Main = () => {
    const [isHost, setIsHost] = useState(false);
    const onSelectClick = () => {
        setIsHost((prev) => !prev);
    }

    return (<>
        <div className="Container">
            <span id="changeSpan" onClick={onSelectClick}><FontAwesomeIcon icon={faExchangeAlt} /> {isHost ? "게스트" : "호스트"}</span>
            {isHost ? <Host /> : <Guest />}
        </div>
    </>);
}
export default Main;