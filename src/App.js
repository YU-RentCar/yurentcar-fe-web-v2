import NavContainer from "components/Nav/NavContainer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeContainer from "pages/Home/HomeContainer";
import MyPageContainer from "pages/MyPage/MyPageContainer";

function App() {
  return (
    <>
      <NavContainer></NavContainer>
      <Routes>
        <Route path="/" element={<HomeContainer />}></Route>
        <Route path="/mypage" element={<MyPageContainer />}></Route>
      </Routes>
    </>
  );
}

export default App;
