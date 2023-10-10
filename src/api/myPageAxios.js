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
// let getUserPrefer = () => {
//   return api({
//     url: "/users/prefer-filter",
//     method: "get",
//   });
// };

/* 사용자 선호 차량 옵션 변경 적용 */
// let changeUserPref = (tmpPrefer) => {
//   return api({
//     url: "/users/prefer-filter",
//     method: "patch",
//     data: tmpPrefer,
//   });
// };

/* 사용자 포인트 내역 */
// let getPointRecord = () => {
//   return api({
//     url: "/points",
//     method: "get",
//   });
// };

/* 사용자 예약 내역 */
// let getResvRecord = () => {
//   return api({
//     url: "/users/reservations",
//     method: "get",
//   });
// };

/* 최근 본 차량 조회 */
// let getRecentRecord = () => {
//   let params = new URLSearchParams();
//   params.append("carNumbers", ["11가1111", "12삼4567"]);
//   return api({
//     url: "/branches/cars/views",
//     method: "get",
//     params: params,
//   });
// };

/* 로그아웃 */
// let logout = () => {
//   return api({
//     url: "/logout",
//     method: "post",
//   });
// };

export { getWaitingResvInfo, getUserInfo, checkNickname, changeNick };
