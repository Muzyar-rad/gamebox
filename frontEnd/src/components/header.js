import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  return (
    // <div className="bg-dark text-light d-flex align-items-center justify-content-between mb-3">
    //   <div className="ml-3">GameBox</div>
    //   <div className="d-flex justify-content-between m-5 pt-3 cart">
    //     <p>0 items</p>
    //     <i className="fa fa-shopping-cart" aria-hidden="true"></i>
    //   </div>
    // </div>

    // <nav className="nav nav-pills nav-justified">
    //   <Link className="nav-item nav-link" to="#">
    //     DESKTOPS
    //   </Link>
    //   <Link className="nav-item nav-link" to="#">
    //     LAPTOPS
    //   </Link>
    //   <Link className="nav-item nav-link" to="#">
    //     GEARSHOP
    //   </Link>
    // </nav>

    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <div className="text-light">
          <Link className="navbar-brand" to="/">
            GameBox Center
          </Link>
        </div>
        <div className="d-flex align-items-baseline text-light pt-3 cart">
          <p className="mr-1">0 items</p>
          <i className="fa fa-shopping-cart"></i>
        </div>
      </div>
    </nav>
  );
};

export default Header;
