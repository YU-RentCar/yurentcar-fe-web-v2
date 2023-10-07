import api from "./interceptors";

/* 차량 제원 정보 */
let getCarSpec = (carNumber) => {
  return api({
    url: "",
    method: "get",
    params: { carNumber: carNumber },
  });
};

/* 차량 수리 내역 */
let getRepairRecord = (carNumber) => {
  return api({
    url: "",
    method: "get",
    params: { carNumber: carNumber },
  });
};

/* 차량 사고 내역 */
let getAccidentRecord = (carNumber) => {
  return api({
    url: "",
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

export {
  getCarSpec,
  getRepairRecord,
  getAccidentRecord,
  getMapPoint,
  getUserPoint,
};
