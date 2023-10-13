import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { navStateSelector } from "recoil/navStateAtom";

export const useAuth = function () {
  const [navState, setNavState] = useRecoilState(navStateSelector);
  const nav = useNavigate();
  const auth = {};

  auth.loginCheck = async function () {
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
      .catch((error) => {
        if (error.response.status === 401) {
          setNavState(false);
          nav("/auth");
        }
      });
  };

  return auth;
};
