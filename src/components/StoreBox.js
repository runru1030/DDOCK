import { useHistory } from 'react-router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const StoreBox = ({ isHost, storeObj }) => {
    const history = useHistory();
    const onStoreClick = () => {
        window.localStorage.setItem("storeObj", JSON.stringify(storeObj));
        if (isHost) {
            history.push({
                pathname: "/host/store",
                state: { storeObj: storeObj }
            });
        } else {
            history.push({
                pathname: "/guest/store",
                state: { storeObj: storeObj }
            });
        }
    }
    return (<>
        <div className="box-container storeBox" onClick={onStoreClick}>
            <span>{storeObj.storeName}</span>
            <span id="subName">{storeObj.storeSubName}</span>
            <span id="go" ><FontAwesomeIcon icon={faChevronRight} /></span>
        </div>
    </>);

}
export default StoreBox;