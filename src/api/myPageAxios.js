import api from "./interceptors";

/* 렌트 대기 예약 정보 */
let getWaitingResvInfo = () => {
  return api({
    url: "/users/reservations/details",
    method: "get",
  });
};

/* 사용자 기본 정보 */
let getUserInfo = () => {
  return api({
    url: "/users/profiles",
    method: "get",
  });
};

/* 닉네임 중복 조회 */
let checkNickname = (tmpNick) => {
  return api({
    url: "/users/nicknames/exists",
    method: "get",
    params: { nickname: tmpNick },
  });
};

/* 닉네임 변경 적용 */
let changeNick = (newNick) => {
  return api({
    url: "/users/nicknames",
    method: "patch",
    data: { nickname: newNick },
  });
};

/* 사용자 선호 차량 옵션 조회 */
let getPreferOption = () => {
  return api({
    url: "/users/prefer-filter",
    method: "get",
  });
};

/* 사용자 선호 차량 옵션 변경 적용 */
let changePreferOption = (newPrefer) => {
  return api({
    url: "/users/prefer-filter",
    method: "patch",
    data: newPrefer,
  });
};

/* 사용자 보유 포인트 조회 */
let getUserPoint = () => {
  return api({
    url: "/users/points",
    method: "get",
  });
};

/* 사용자 포인트 내역 */
let getPointRecord = () => {
  return api({
    url: "/points",
    method: "get",
  });
};

/* 사용자 예약 내역 */
let getResvRecord = () => {
  return api({
    url: "/users/reservations",
    method: "get",
  });
};

/* 후기 작성 */
let writeReview = (newReview) => {
  return api({
    url: "/reservations/reviews",
    method: "post",
    data: {
      reservationId: newReview.reservationId,
      title: newReview.title,
      description: newReview.description,
      reason: newReview.reason,
    },
  });
};

/* 후기 조회 */
let getReview = (reservationId) => {
  return api({
    url: "/reservations/reviews",
    method: "get",
    params: { reservationId: reservationId },
  });
};

/* 차량 정보 */
let getRecent = (carNumber) => {
  return api({
    url: "/branches/cars/details",
    method: "get",
    params: { carNumber: carNumber },
  });
};

/* 로그아웃 */
let logout = () => {
  return api({
    url: "/logout",
    method: "post",
  });
};

export {
  getWaitingResvInfo,
  getUserInfo,
  checkNickname,
  changeNick,
  getPreferOption,
  changePreferOption,
  getUserPoint,
  getPointRecord,
  getResvRecord,
  writeReview,
  getReview,
  getRecent,
  logout,
};
