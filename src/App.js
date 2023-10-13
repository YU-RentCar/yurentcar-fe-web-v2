import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { alertAtom } from "recoil/alertAtom";
import { navStateSelector } from "recoil/navStateAtom";
import "./App.css";
import Nav from "components/Nav";
import Home from "pages/Home/Home";
import MyPage from "pages/MyPage/MyPage";
import Reservation from "pages/Reservation/Reservation";
import CarSearch from "pages/CarSearch/CarSearch";
import Auth from "pages/Auth/Auth";
import Notice from "pages/Notice/Notice";
import NoticeDetail from "pages/NoticeDetail/NoticeDetail";
import axios from "axios";
import Alert from "popUp/Alert";

function App() {
  /* 
    Nav 제어 state
    true : Nav 표시o
    false : Nav 표시x
  */
  const [navState, setNavState] = useRecoilState(navStateSelector);
  let nav = useNavigate(); // 경로 이동
  let location = useLocation(); // 현재 경로 확인용
  const alertState = useRecoilValue(alertAtom).state; // Alert 제어
  useEffect(() => {
    (async () => {
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
          console.log(response);
          if (response.status === 200) {
            // 로그인 성공 -> 네비게이션바on, 기존에 있던 경로 or home 으로 이동
            setNavState(true);
            if (location.pathname.split("/")[1] === "") nav("/");
            else nav("/" + location.pathname.split("/")[1]);
          }
        })
        .catch((error) => {
          console.log(error.response);
          if (error.response.status === 401) {
            // 로그인 실패 -> 로그인화면으로
            setNavState(false);
            nav("/auth");
          }
        });
    })();
  }, []);
  return (
    <>
      {navState ? <Nav /> : null}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
        <Route path="/carsearch" element={<CarSearch />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/notice" element={<Notice />}></Route>
        <Route path="/noticedetail" element={<NoticeDetail />}></Route>
      </Routes>
      {alertState ? <Alert /> : null}
    </>
  );
}

export default App;
