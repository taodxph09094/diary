import React, { useState } from "react";
import backgroundImage from "../../assets/images/background/Mind.png";
import imageMove from "../../assets/images/images/moveTo.png";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
const Home = ({ isLogin }) => {
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
  const [checkModal, setCheckModal] = useState(false);
  const handleMove = () => {
    if (isLogin) {
      navigate("/diary");
    } else {
      setCheckModal(true);
    }
  };
  const handleOk = () => {
    if (isLogin) {
      navigate("/diary");
    } else {
      setCheckModal(true);
    }
  };
  const handleCancel = () => {
    setCheckModal(false);
  };
  return (
    <div style={divStyle}>
      <img src={imageMove} style={imgStyle} alt="" onClick={handleMove} />
      {checkModal && (
        <Modal open={checkModal}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      )}
    </div>
  );
};

export default Home;
