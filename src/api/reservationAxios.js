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

/* 차량 사고 내역 */
let getCarAccident = (carNumber) => {
  return api({
    url: "/branches/cars/accidents",
    method: "get",
    params: { carNumber: carNumber },
  });
};

/* 지점 위도, 경도 */
let getMapPoint = (storeInfo) => {
  return api({
    url: "/branches/location",
    method: "get",
    params: { province: storeInfo.province, branchName: storeInfo.store },
  });
};

/* 사용자 기본 정보 */
let getUserInfo = () => {
  return api({
    url: "/users/profiles",
    method: "get",
  });
};

/* 사용자 포인트 */
let getUserPoint = () => {
  return api({
    url: "/users/points",
    method: "get",
  });
};

/* 차량 예약 */
let resvRent = (data) => {
  return api({
    url: "/reservations",
    method: "post",
    data: data,
  });
};

export {
  getCarInfo,
  getCarRepair,
  getCarAccident,
  getMapPoint,
  getUserInfo,
  getUserPoint,
  resvRent,
};
