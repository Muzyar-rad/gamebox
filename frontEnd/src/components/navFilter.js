import React from "react";
import { Link } from "react-router-dom";

const NavFilter = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark mt-3">
        <div className="container">
          <Link className="nav-item nav-link text-light" to="#">
            <i className="fa fa-desktop mr-1"></i>
            DESKTOPS
          </Link>
          <Link className="nav-item nav-link text-light" to="#">
            <i className="fa fa-laptop mr-1"></i>
            LAPTOPS
          </Link>
          <Link className="nav-item nav-link text-light" to="#">
            <i className="fa fa-cogs mr-1"></i>
            GEARSHOP
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavFilter;
