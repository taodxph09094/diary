import React from "react";
import backgroundImage from "../../assets/images/background/Mind.png";
import imageMove from "../../assets/images/images/moveTo.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
  };
  const imgStyle = {
    position: "absolute",
    bottom: 70,
    left: "50%",
    width: 400,
    height: 200,
    transform: "translateX(-50%)",
    cursor: "pointer",
  };
  const styleText = {};
  const navigate = useNavigate();
  const handleMove = () => {
    navigate("/diary");
  };
  return (
    <div style={divStyle}>
      <img src={imageMove} style={imgStyle} alt="" onClick={handleMove} />
      {/* <p style={styleText}>Xem và viết</p> */}
    </div>
  );
};

export default Home;
