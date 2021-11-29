import StoreForm from '../components/StoreForm';

const AddStore = ({ hostObj }) => {
    return (
    <div className="Container">
        <span className="title">나의 매장 등록 </span>
        <StoreForm hostObj={hostObj}/>
    </div>);
}

export default AddStore;