import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavContainer from "components/Nav/NavContainer";
import MyPageContainer from "pages/MyPage/MyPageContainer";

function App() {
  return (
    <>
      <NavContainer></NavContainer>
      <Routes>
        <Route path="/mypage" element={<MyPageContainer />}></Route>
      </Routes>
    </>
  );
}

export default App;
