import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle = {
    // position: "fixed",
    zIndex: 1,
    backgroundColor: isScrolled ? "#333" : "transparent", // Thay đổi màu nền dựa trên isScrolled
    width: "100%",
    transition: "background-color 0.3s",
    margin: "50px 0px -30px 0px;", // Hiệu ứng màu nền chuyển đổi mềm mại
  };

  const menuStyle = {
    listStyleType: "none",
    display: "flex",
    justifyContent: "center",
    padding: "0",
    fontFamily: "'Playpen Sans', cursive",
    fontSize: "25px",
  };

  const menuItemStyle = {
    padding: "10px 20px",
  };

  return (
    <nav style={headerStyle}>
      <ul style={menuStyle}>
        <li style={menuItemStyle}>
          <Link className="nav-link" style={{ color: "#917065" }} to="/diary">
            Nhật ký
          </Link>
        </li>
        {/* <li style={menuItemStyle}>
          <Link className="nav-link" style={{ color: "#917065" }} to="/public">
            Mọi người
          </Link>
        </li>
        <li style={menuItemStyle}>
          <Link className="nav-link" style={{ color: "#917065" }} to="/my-list">
            Danh sách của tôi
          </Link>
        </li> */}
        <li style={menuItemStyle}>
          <Link className="nav-link" style={{ color: "#917065" }} to="/info">
            Thông tin
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
