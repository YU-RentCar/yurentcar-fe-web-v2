import Nav from "components/Nav";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import MyPage from "pages/MyPage/MyPage";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
