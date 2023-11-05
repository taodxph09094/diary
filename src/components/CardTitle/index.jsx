import React from "react";
import "./Card.css";
import imageA from "../../assets/images/background/bg-title.png";
const CardTitle = (props) => {
  const divStyleHeader = {
    backgroundImage: `url(${imageA})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "20%",
    height: "70px",
    zIndex: 3,
  };
  return props.type === "title" ? (
    <div>
      <div className="card-header">
        <div style={divStyleHeader}>
          <div className="card-title">
            <p>
              Tháng {props?.month} / {props?.year}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className="card-header">hi</div>
    </div>
  );
};

export default CardTitle;
