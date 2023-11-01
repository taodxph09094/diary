import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ForMe from "./pages/ForMe";
import Public from "./pages/Public";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/diary" element={<ForMe />} />
        <Route path="/public" element={<Public />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
