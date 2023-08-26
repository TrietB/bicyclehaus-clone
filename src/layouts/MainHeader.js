import React from "react";
import { Stack, Button } from "react-bootstrap";
// import {Button} from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import logo from "../assets/images/bicyclehauslogo-wht.png";
import banner from "../assets/images/banner.jpeg";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

// const styledButton = {
//   textDecoration: "none",
//   color: "white",
//   padding: "8px 0",
//   margin: "0 13px 0 13px",
//   fontSize: "13px",
//   fontWeight: "700",
//   fontSize: "futura-pt"
// };

const headerButton = [
  { name: "HOME", to: "/" },
  { name: "SHOP", to: "haus-shop" },
  { name: "CONTACT", to: "/contact" },
  { name: "SOCIAL", to: "/social" },
  { name: "ABOUT", to: "/about" },
  { name: "GALLERY", to: "/gallery" },
];

function MainHeader() {
  return (
    <header id="header">
      <div className="header-banner">{/* <img src={banner} /> */}</div>
      <div className="header-inner">
        <div className="header-branding">
          <Link to={"/"}>
            <img className="header-logo" src={logo} alt="" />
          </Link>
        </div>
        <div className="header-nav">
          <div className="header-link">
            {headerButton.map((button) => (
              // <button style={styledButton} key={button.name}>
              <Link to={button.to}>{button.name}</Link>
              // </button>
            ))}
          </div>
          <div className="header-social">
            <FaFacebookF />
            <BsInstagram />
          </div>
          <div className="header-cart">CART</div>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
