import api from "./interceptors";

export const getNoticeList = (payload) => {
  const params = new URLSearchParams();

  params.append("province", payload.province);
  params.append("branchName", payload.store);
  params.append("count", payload.count);

  return api({
    url: "/branches/notices",
    method: "get",
    params: params,
  });
};

export const getCarDetail = (payload) => {
  const params = new URLSearchParams();

  params.append("carNumber", payload.carNumber);

  return api({
    url: "/branches/cars/details",
    method: "get",
    params: params,
  });
};
