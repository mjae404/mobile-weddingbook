import React, {useEffect} from "react";
const { kakao } = window;

function KakaoMap() {
    useEffect(() => {
        const container = document.getElementById("map");
        const options = {
            center: new kakao.maps.LatLng(37.51321919172513, 127.03149253004044),
            level: 3
        }
        const map = new kakao.maps.Map(container, options);
        const markerPosition  = new kakao.maps.LatLng(37.51321919172513, 127.03149253004044);
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });

        var infowindow = new kakao.maps.InfoWindow({
            content: '<div style="width:150px;text-align:center;padding:6px 0; font-size: 14px;">컨벤션 헤리츠</div>'
        });

        marker.setMap(map);
        infowindow.open(map, marker);


    }, []);

    return (
        <div id="map"></div>
    );
}

export default KakaoMap;
