import Nav from "components/Nav";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import MyPageContainer from "pages/MyPage/MyPageContainer";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mypage" element={<MyPageContainer />}></Route>
      </Routes>
    </>
  );
}

export default App;
