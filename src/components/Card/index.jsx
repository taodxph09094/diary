import React from "react";
import imgCard from "../../assets/images/images/cardt.png";
import { useNavigate } from "react-router-dom";
import { createSlugFromData } from "../../utils";
const Card = (props) => {
  const { data } = props;
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
    const slug = createSlugFromData(data);
    navigate(`/detail/${slug}`, { state: { id: data?._id } });
  };
  return (
    <div onClick={handleToDetail}>
      <div style={divStyle}>
        <div className="text-card">
          <p className="text">Ngày {data?.day}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
