import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ForMe from "./pages/ForMe";
import Public from "./pages/Public";
import Detail from "./pages/Detail";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import CreatePage from "./pages/Post/CreatePage";
import { jwtDecode } from "jwt-decode";

function App() {
  const navigate = useNavigate();

  const userToken = localStorage.getItem("userToken");

  const decodedToken = jwtDecode(userToken);

  useEffect(() => {
    if (!userToken) {
      navigate("/");
      return;
    }
    if (decodedToken) {
      const expirationTime = decodedToken.exp;
      const currentTime = Math.floor(Date.now() / 1000);
      const timeRemaining = expirationTime - currentTime;
      console.log("Thời gian còn lại (giây):", timeRemaining);
      const minutesRemaining = Math.floor(timeRemaining / 60);
      console.log("Thời gian còn lại (phút):", minutesRemaining);
      if (timeRemaining <= 0) {
        console.log("Token đã hết hạn, chuyển hướng về trang chủ...");
        localStorage.clear();
        navigate("/");
      } else {
        console.log("Token còn hạn, tiếp tục xử lý...");
      }
    } else {
      console.error("Không thể giải mã token:", decodedToken);
      localStorage.clear();
      navigate("/");
    }
  }, [decodedToken, userToken]);

  return (
    <>
      {userToken && userToken ? (
        <Routes>
          <Route path="/diary" element={<ForMe />} />
          <Route path="/public" element={<Public />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/detail/:slug" element={<Detail />} />
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
