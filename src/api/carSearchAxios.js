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
