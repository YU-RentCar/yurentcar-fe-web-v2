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
        <Route path="/" element={<Home />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
        <Route path="/carsearch" element={<CarSearch />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/notice" element={<Notice />}></Route>
      </Routes>
    </>
  );
}

export default App;
