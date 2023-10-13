import api from "./interceptors";

/* 차량 정보 */
let getCarInfo = (carNumber) => {
  return api({
    url: "/branches/cars/details",
    method: "get",
    params: { carNumber: carNumber },
  });
};

/* 차량 수리 내역 */
let getCarRepair = (carNumber) => {
  return api({
    url: "/branches/cars/repairs",
    method: "get",
    params: { carNumber: carNumber },
  });
};

/* 지점 위도, 경도 */
let getMapPoint = (store) => {
  return api({
    url: "",
    method: "get",
    params: { store: store },
  });
};

/* 사용자 포인트 */
let getUserPoint = () => {
  return api({
    url: "/users/points",
    method: "get",
  });
};

export { getCarInfo, getCarRepair, getMapPoint, getUserPoint };
