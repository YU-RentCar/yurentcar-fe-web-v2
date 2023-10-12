import axios from "axios";

export const loginCheck = async function () {
  await axios
    .post(
      "http://be.yurentcar.kro.kr:1234/api/v1/auth/user-info",
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    )
    .then((response) => {
      if (response.status === 200) {
        return true; // 로그인 성공
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        return false; // 로그인 실패
      }
    });
};
