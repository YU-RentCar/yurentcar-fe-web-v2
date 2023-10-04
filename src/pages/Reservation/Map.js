import { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    const { kakao } = window;
    var container = document.getElementById("map");
    /* 지도 표시 */
    var options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    /* 마커 표시 */
    var marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(33.450701, 126.570667),
    });
    /* 지도 컨트롤러 */
    var mapTypeControl = new kakao.maps.MapTypeControl(); // 지도 <-> 스카이뷰
    var zoomControl = new kakao.maps.ZoomControl(); // 확대, 축소
    /* 지도 세팅 */
    var map = new kakao.maps.Map(container, options);
    marker.setMap(map);
    map.setZoomable(false);
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  }, []);
  return (
    <div className="flex flex-col items-center w-full py-8 mt-12 bg-sky-50 rounded-2xl shadow-figma">
      {/* 타이틀 */}
      <div className="w-[1010px] h-[70px] flex justify-between items-center text-blue-800 text-[45px] font-bold">
        지도
      </div>
      {/* 지도가 보여질 영역 */}
      <div id="map" className="w-[1100px] h-[600px] mt-4"></div>
    </div>
  );
};

export default Map;
