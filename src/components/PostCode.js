import DaumPostCode from 'react-daum-postcode';

const PostCode = ({ setIsOpen, setStoreObj }) => {
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
        setIsOpen(false);
        setStoreObj(storeObj => ({ ...storeObj, storeAddress: fullAddress }))
    }
    const onPostClick = () => {
        setIsOpen(prev => !prev);
    }
    return (
        <>
            <span onClick={onPostClick} id="search-box">취소</span>
            <DaumPostCode onComplete={handleComplete} className="postCode" />
        </>
    );
}

export default PostCode;