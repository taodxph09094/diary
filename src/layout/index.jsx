import React from "react";
import Header from "../components/Header";

const AppLayout = (props) => {
  return (
    <>
      <Header />
      <div style={{ height: "100px" }} />
      <div className="body-content">{props.children}</div>
    </>
  );
};

export default AppLayout;
