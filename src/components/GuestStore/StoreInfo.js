import MapContainer from '../MapContainer';
const StoreInfo = () => {
    const storeObj =JSON.parse(window.localStorage.getItem("storeObj")) || 0;
    return (
        <div className="storeinfo">
            <span id="title">매장 위치</span>
            <span>{storeObj.storeAddress}</span>
            <MapContainer />
            <hr />

            <span id="title">매장 연락처</span>
            <span>{storeObj.storeCall}<span><a className="blue-button" id="call-link" href={`tel:${storeObj.storeCall}`}>전화걸기</a></span></span>
            <hr />

            <span id="title">매장 소개글</span>
            <span>{storeObj.storeInfo}</span>
            <hr />

            <span id="title">영업 시간</span>
            <span>오픈 : {storeObj.openTime} - 마감 : {storeObj.closeTime}</span>
            <hr />

            <span id="title">메뉴판 사진</span>
            <span>{storeObj.menuURL ? <img width="350px" src={storeObj.menuURL} /> : "."}</span>
        </div>);
}
export default StoreInfo;