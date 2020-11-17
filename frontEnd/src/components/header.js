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
      <Link className="navbar-brand ml-5" to="/">
        GameBox Center
      </Link>
      <div className="d-flex justify-content-between align-items-baseline text-light mt-3 mr-5">
        <p>0 items</p>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </div>
    </nav>
  );
};

export default Header;
