import React from "react";
import logo from "../assets/GameBox Logo.png";

const Footer = () => {
  return (
    <nav className="container-fluid navbar navbar-dark bg-dark flex-column">
      <div className="navbar-brand">
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
      <div className="navbar-brand">A Rad Industries Brand</div>
    </nav>
  );
};

export default Footer;
