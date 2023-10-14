import api from "./interceptors";

/* 공지사항 리스트 */
let getNoticeList = (params) => {
  return api({
    url: "/branches/notices",
    method: "get",
    params: params,
  });
};

/* 공지사항 조회 */
let getNotice = (noticeId) => {
  return api({
    url: "/branches/notices/details",
    method: "get",
    params: { noticeId: noticeId },
  });
};

export { getNoticeList, getNotice };
