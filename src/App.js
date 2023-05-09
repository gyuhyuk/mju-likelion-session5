import "./App.css";
import Modal from "./components/Modal";
import { useState } from "react";
import Main from "./page/Main";

function App() {
  const [click, setClick] = useState(false);

  const handleLogin = () => {
    setClick((prev) => !prev);
  };

  return (
    <>
      {click && <Modal click={setClick} />}
      <Main click={handleLogin} />
    </>
  );
}

export default App;
