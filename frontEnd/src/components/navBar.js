import React from "react";
import { Link } from "react-router-dom";
import "../css/navBar.css";

const NavBar = () => {
  return (
    <div className="container-fluid">
      <div className="topNav d-flex align-items-center justify-content-between mb-3">
        <div className="ml-3">GameBox</div>
        <div className="d-flex justify-content-between m-5 pt-3 cart">
          <p>0 items</p>
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </div>
      </div>
      <nav className="nav nav-pills nav-justified">
        <Link className="nav-item nav-link" to="#">
          DESKTOPS
        </Link>
        <Link className="nav-item nav-link" to="#">
          LAPTOPS
        </Link>
        <Link className="nav-item nav-link" to="#">
          GEARSHOP
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
