import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ForMe from "./pages/ForMe";
import Public from "./pages/Public";
import Detail from "./pages/Detail";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const userToken = localStorage.getItem("userToken");
  useEffect(() => {
    if (userToken) {
      navigate("/diary");
    }
  }, [userToken]);
  return (
    <>
      {userToken && userToken ? (
        <Routes>
          <Route path="/diary" element={<ForMe />} />
          <Route path="/public" element={<Public />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </>
  );
}

export default App;
