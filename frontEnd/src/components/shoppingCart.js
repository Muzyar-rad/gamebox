import React from "react";
import { NavLink } from "react-router-dom";
import "../css/shoppingCart.css";

const ShoppingCart = () => {
  return (
    <div className="container mt-3">
      <NavLink className="text-checkout p-2" to="/">
        <i className="fa fa-chevron-circle-left m-1"></i>
        Back to Catalog
      </NavLink>
      <p className="fontSize ml-3">My Cart</p>
      <div className="row">
        <div className="col-8">
          <div className="card card-shadow">
            <div className="card-body">
              <div className="row mb-4">
                <div className="col">
                  <img
                    className="card-img-fit mx-auto d-block"
                    src={require("../assets/img/Alienware R11 Desktop.webp")}
                    alt="product_pic_2"
                  />
                </div>
                <div className="col">
                  <h5 className="card-title-item">
                    Alienware Aurora R11 Gaming Desktop
                  </h5>
                  <p className="card-price text-muted">$3,659.99</p>
                  <div className="d-flex flex-row align-items-baseline">
                    <p className="card-price mr-2">Quantity:</p>
                    <button className="badge badge-pill badge-color">-</button>
                    <p className="px-2">2</p>
                    <button className="badge badge-pill badge-color">+</button>
                  </div>
                  <p className="card-desc">
                    The Alienware Aurora R11 is engineered with 10th Gen Intel®
                    Core™ processors, optional liquid-cooled graphics and
                    multiple upgrade options to achieve peak performance that
                    lasts.
                  </p>
                  <button type="button" className="btn btn-danger text-light">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-body d-flex flex-column align-items-center">
              <div className="card-title-item">Total: $100,000.99</div>
              <button className="btn btn-checkout mt-5">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
