import Nav from "components/Nav";
import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "pages/Home/Home";
import MyPage from "pages/MyPage/MyPage";
import Reservation from "pages/Reservation/Reservation";
import CarSearch from "pages/CarSearch/CarSearch";
import Auth from "pages/Auth/Auth";
import Notice from "pages/Notice/Notice";
import NoticeDetail from "pages/NoticeDetail/NoticeDetail";
import axios from "axios";

function App() {
  /* 
    Nav 제어 state
    true : Nav 표시o
    false : Nav 표시x
  */
  const [navState, setNavState] = useState(false);
  let nav = useNavigate(); // 경로 이동
  let location = useLocation(); // 현재 경로 확인용
  useEffect(() => {
    (async () => {
      await axios
        .post("http://be.yurentcar.kro.kr:1234/api/v1/auth/user-info", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            // 로그인 성공 -> 네비게이션바on, 기존에 있던 경로 or home 으로 이동
            setNavState(true);
            if (location.pathname.split("/")[1] === "") nav("/react/home");
            else nav("/react/" + location.pathname.split("/")[1]);
          }
        })
        .catch((error) => {
          console.log(error.response);
          if (error.response.status === 401) {
            // 로그인 실패 -> 로그인화면으로
            setNavState(false);
            nav("/react/auth");
          }
        });
    })();
  }, []);
  return (
    <>
      {navState ? <Nav /> : null}
      <Routes>
        <Route path="/react" element={<Home />}></Route>
        <Route path="/react/mypage" element={<MyPage />}></Route>
        <Route path="/react/reservation" element={<Reservation />}></Route>
        <Route path="/react/carsearch" element={<CarSearch />}></Route>
        <Route path="/react/auth" element={<Auth />}></Route>
        <Route path="/react/notice" element={<Notice />}></Route>
        <Route path="/react/noticedetail" element={<NoticeDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
