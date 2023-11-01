import React from "react";
import imgCard from "../../assets/images/images/cardt.png";
import { useNavigate } from "react-router-dom";
const Card = () => {
  const navigate = useNavigate();
  const divStyle = {
    backgroundImage: `url(${imgCard})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "27vh",
    height: "25vh",
    cursor: "pointer",
  };
  const handleToDetail = () => {
    navigate("/detail");
  };
  return (
    <div onClick={handleToDetail}>
      <div style={divStyle}>
        <div className="text-card">
          <p className="text">Ngay</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
