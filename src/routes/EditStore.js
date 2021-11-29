import StoreForm from '../components/StoreForm';

const EditStore = () => {
    const storeObj =JSON.parse(window.localStorage.getItem("storeObj")) || 0;
    const hostObj = JSON.parse(window.localStorage.getItem("hostObj")) || 0;
    return (
    <div className="Container">
        <span className="title">매장정보 수정</span>
        <StoreForm isUpdate={true} hostObj={hostObj} store={storeObj}/>
    </div>);
}
export default EditStore;