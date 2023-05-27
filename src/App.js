import "./App.css";
import Modal from "./components/Modal";
import { useState } from "react";
import Main from "./page/Main";
import More from "./page/More";
import Details from "./page/Details";
import { Route, Routes } from "react-router-dom";
import Header from "./page/Header";
import SimilarBox from "./page/SimilarBox";
function App() {
  const [click, setClick] = useState(false);
  const handleLogin = () => {
    setClick((prev) => !prev);
  };

  return (
    <>
      <Header LoginBtn={handleLogin}></Header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/more/:id" element={<More />} />
      </Routes>
      {click && <Modal click={setClick} />}
    </>
  );
}

export default App;
