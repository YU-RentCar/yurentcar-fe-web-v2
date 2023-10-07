import api from "./interceptors";

/* 지점 리스트  */
let getStoreList = (province) => {
  return api({
    url: "/branches",
    method: "get",

    params: {
      siDo: province,
    },
  });
};

/* 차량 리스트 */
let getCarInfoList = (payload) => {
  /* 차량 리스트를 서버에 요청하기 위해 필요한 처리 */
  let par = new URLSearchParams();
  par.append("startDate", payload.startDate);
  par.append("endDate", payload.endDate);
  par.append("carSizes", payload.carSizes);
  par.append("minCount", payload.minCount);
  par.append("oilTypes", payload.oilTypes);
  par.append("transmissions", payload.transmissions);
  par.append("branchName", payload.branchName);
  par.append("siDo", payload.siDo);

  return api({
    url: "/branches/cars",
    method: "get",
    params: par,
  });
};

/* 차량 상세정보 조회 */
let getCarDetailInfo = (carNumber) => {
  return api({
    url: "/branches/cars/details",
    method: "get",
    params: {
      carNumber: carNumber,
    },
  });
};

export { getStoreList, getCarInfoList, getCarDetailInfo };
