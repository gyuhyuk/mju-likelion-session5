import "./App.css";
import Modal from "./components/Modal";
import { useState } from "react";
import Main from "./page/Main";
import More from "./page/More";
import Details from "./page/Details";
import { Route, Routes } from "react-router-dom";

function App() {
  const [click, setClick] = useState(false);

  const handleLogin = () => {
    setClick((prev) => !prev);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Main click={handleLogin} />} />
        <Route
          path="/details/:rank"
          element={<Details click={handleLogin} />}
        />
        <Route
          path="details/:rank/More/:rank"
          element={<More click={handleLogin} />}
        />
      </Routes>
      {click && <Modal click={setClick} />}
    </>
  );
}

export default App;
