import React from "react";
import logo from "../../public/GameBox Logo.png";
import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top">
      <div className="container">
        <div className="text-light">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              width="25"
              height="20"
              className="mr-1 mb-1"
              alt="Gamebox logo"
            />
            GameBox Center
          </Link>
        </div>
        <Link className="navbar-brand" to="/shoppingcart">
          <div className="d-flex align-items-baseline text-light pt-3 cart">
            <p className="mr-1">0 items</p>
            <i className="fa fa-shopping-cart"></i>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
