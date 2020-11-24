import React from "react";
import logo from "../assets/GameBox Logo.png";
import "../css/footer.css";

const Footer = () => {
  return (
    <nav className="container-fluid navbar navbar-dark bg-dark text-white flex-column p-4">
      <div className="title">
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
      <div className="brand">A Rad Industries Brand</div>
    </nav>
  );
};

export default Footer;
