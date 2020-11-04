import React from "react";
import "../css/navBar.css";

const NavBar = () => {
  return (
    <div className="container-fluid">
      <div className="topNav mb-3">GameBox</div>
      <nav class="nav nav-pills nav-justified">
        <a class="nav-item nav-link" href="#">
          Active
        </a>
        <a class="nav-item nav-link" href="#">
          Link
        </a>
        <a class="nav-item nav-link" href="#">
          Link
        </a>
        <a class="nav-item nav-link" href="#">
          Disabled
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
