import React, { useEffect } from 'react';

const MapContainer = () => {

    const { kakao } = window;
    const storeObj = JSON.parse(window.localStorage.getItem("storeObj")) || 0;
    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
        var geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch(storeObj.storeAddress, function (result, status) {

            
            if (status === kakao.maps.services.Status.OK) {

                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                map.setCenter(coords);
            }
        });

    }, [storeObj.storeAddress]);
    return (
        <div id='map' style={{
            width: '100%',
            height: '300px'
        }}></div>
    );
}

export default MapContainer;