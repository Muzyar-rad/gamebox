import React from "react";
import { NavLink } from "react-router-dom";

const NavFilter = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark mt-3">
        <div className="container">
          <NavLink className="nav-item nav-link text-light" to="/">
            <i className="fa fa-desktop mr-1"></i>
            DESKTOPS
          </NavLink>
          <NavLink className="nav-item nav-link text-light" to="/">
            <i className="fa fa-laptop mr-1"></i>
            LAPTOPS
          </NavLink>
          <NavLink className="nav-item nav-link text-light" to="/">
            <i className="fa fa-cogs mr-1"></i>
            GEARSHOP
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavFilter;
