import api from "./interceptors";

/* 렌트 대기 차량 기본 정보 */
let getDetailInfo = () => {
  return api({
    url: "/users/reservations/cars",
    method: "get",
  });
};

/* 렌트 대기 차량 제원 정보 */
let getDetailSpec = () => {
  return api({
    url: "/users/reservations/car-specs",
    method: "get",
  });
};

/* 렌트 대기 차량 수리 정보 */
let getDetailRepair = () => {
  return api({
    url: "/users/reservations/repairs",
    method: "get",
  });
};

/* 렌트 대기 차량 수리 정보 */
let getDetailAccident = () => {
  return api({
    url: "/users/reservations/accidents",
    method: "get",
  });
};

/* 렌트 지점 위치 정보 */
let getDetailMap = () => {
  return api({
    url: "/users/reservations/branches/location",
    method: "get",
  });
};

/* 사용자 포인트 조회 */
let getDetailPoint = () => {
  return api({
    url: "/users/points",
    method: "get",
  });
};

/* 렌트 금액 조회 */
let getDetailPrice = () => {
  return api({
    url: "/users/reservations/prices",
    method: "get",
  });
};

export {
  getDetailInfo,
  getDetailSpec,
  getDetailRepair,
  getDetailAccident,
  getDetailMap,
  getDetailPoint,
  getDetailPrice,
};
