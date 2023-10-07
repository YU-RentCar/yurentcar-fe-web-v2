import Nav from "components/Nav";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "pages/Home/Home";
import MyPage from "pages/MyPage/MyPage";
import Reservation from "pages/Reservation/Reservation";
import CarSearch from "pages/CarSearch/CarSearch";
import Auth from "pages/Auth/Auth";
import Notice from "pages/Notice/Notice";
import NoticeDetail from "pages/NoticeDetail/NoticeDetail";

function App() {
  /* 
    Nav 제어 state
    true : Nav 표시o
    false : Nav 표시x
  */
  const [navState, setNavState] = useState(true);
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
