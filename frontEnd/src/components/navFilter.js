import React from "react";
import "../css/navFilter.css";

const NavFilter = (props) => {
  const [filter, setFilter] = React.useState("");
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark mt-3">
        <div className="container">
          <div
            className="nav-item nav-link text-white"
            onClick={() => {
              setFilter("DESKTOP");
            }}
          >
            <i className="fa fa-desktop mr-1"></i>
            DESKTOPS
          </div>
          <div
            className="nav-item nav-link text-white"
            onClick={() => {
              setFilter("LAPTOP");
            }}
          >
            <i className="fa fa-laptop mr-1"></i>
            LAPTOPS
          </div>
          <div
            className="nav-item nav-link text-white"
            onClick={() => {
              setFilter("GEAR");
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
