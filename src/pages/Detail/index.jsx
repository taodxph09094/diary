import React from "react";
import AppLayout from "../../layout";
import bgImage from "../../assets/images/background/ppnb1.jpeg";

const Detail = () => {
  const divStyleHeader = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "70%",
    height: "110vh",
    zIndex: 10,
  };
  return (
    <AppLayout>
      <div style={divStyleHeader}></div>
      {/* <div
        style={{ background: "white", width: "100%", height: "100vh" }}
      ></div> */}
    </AppLayout>
  );
};

export default Detail;
