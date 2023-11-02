import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ForMe from "./pages/ForMe";
import Public from "./pages/Public";
import Detail from "./pages/Detail";
import { GetAuthSelector } from "./redux/selectors/auth";
import { useDispatch } from "react-redux";
import { checkAuth } from "./redux/modules/auth";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const auth = GetAuthSelector();
  const { isLogin } = auth;
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  return isLogin ? (
    <Routes>
      <Route path="/diary" element={<ForMe />} />
      <Route path="/public" element={<Public />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Home isLogin={isLogin} />} />
    </Routes>
  );
}

export default App;
