import React from "react";
import "../css/navFilter.css";

const NavFilter = (props) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark mt-3">
        <div className="container">
          <div
            className="nav-item nav-link text-white"
            onClick={() => {
              props.onFilterSelect("Desktop");
            }}
          >
            <i className="fa fa-desktop mr-1"></i>
            DESKTOPS
          </div>
          <div
            className="nav-item nav-link text-white"
            onClick={() => {
              props.onFilterSelect("Laptop");
            }}
          >
            <i className="fa fa-laptop mr-1"></i>
            LAPTOPS
          </div>
          <div
            className="nav-item nav-link text-white"
            onClick={() => {
              props.onFilterSelect("Gear");
            }}
          >
            <i className="fa fa-cogs mr-1"></i>
            GEARSHOP
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavFilter;
