import React from "react";
import logo from "../assets/GameBox Logo.png";

const Footer = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="d-flex flex-column justify-content-center">
        <div className="navbar-brand h1">
          {" "}
          <img
            src={logo}
            width="25"
            height="20"
            className="mr-1 mb-1"
            alt="Gamebox logo"
          />
          Gamebox Center
        </div>
        <div className="navbar-brand h5">A Rad Industries Brand</div>
      </div>
    </nav>
  );
};

export default Footer;
