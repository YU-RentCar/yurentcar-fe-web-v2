import NavContainer from "components/Nav/NavContainer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeContainer from "pages/Home/HomeContainer";

function App() {
  return (
    <>
      <NavContainer></NavContainer>
      <Routes>
        <Route path="/" element={<HomeContainer />}></Route>
      </Routes>
    </>
  );
}

export default App;
