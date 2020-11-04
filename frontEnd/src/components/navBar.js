import React from "react";
import { Link } from "react-router-dom";
import "../css/navBar.css";

const NavBar = () => {
  return (
    <div className="container-fluid">
      <div className="topNav d-flex align-items-center justify-content-around mb-3">
        <div className="ml-3">GameBox</div>
        <div>Time</div>
      </div>
      <nav class="nav nav-pills nav-justified">
        <Link class="nav-item nav-link" to="#">
          Active
        </Link>
        <Link class="nav-item nav-link" to="#">
          Link
        </Link>
        <Link class="nav-item nav-link" to="#">
          Link
        </Link>
        <Link class="nav-item nav-link" to="#">
          Disabled
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
