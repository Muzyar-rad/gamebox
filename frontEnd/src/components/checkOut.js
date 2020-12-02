import React from "react";
import { NavLink } from "react-router-dom";

const CheckOut = () => {
  return (
    <div className="container mt-3">
      <NavLink className="text-checkout p-2" to="/">
        <i className="fa fa-chevron-circle-left m-1"></i>
        Back to Catalog
      </NavLink>
      <p className="fontSize ml-3">Check Out</p>
    </div>
  );
};

export default CheckOut;
