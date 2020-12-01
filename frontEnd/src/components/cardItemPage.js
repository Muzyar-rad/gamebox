import React from "react";
import { NavLink } from "react-router-dom";

const CardItemPage = () => {
  return (
    <div className="container p-5">
      <div className="card">
        <NavLink className="p-2" to="/">
          <i className="fa fa-chevron-circle-left m-1"></i>
          Back to Catalog
        </NavLink>
        <div className="card-body">
          <h5 className="card-title">Alienware Aurora R11 Gaming Desktop</h5>
          <img
            className="card-img-fit float-left"
            src={require("../assets/img/Alienware R11 Desktop.webp")}
            alt="product_pic_2"
          />
          <p className="card-text">
            <small className="text-muted">$1,440.00</small>
          </p>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardItemPage;
