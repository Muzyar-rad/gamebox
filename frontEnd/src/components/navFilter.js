import React from "react";
import { Link } from "react-router-dom";

const NavFilter = () => {
  return (
    <div>
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

export default NavFilter;
