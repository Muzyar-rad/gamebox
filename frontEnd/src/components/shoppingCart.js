import React from "react";
import ShoppingCartProductItem from "./shoppingCartProductItem";
import ShoppingCartTotalPrice from "./shoppingCartTotalPrice";
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
        <div className="col-md-8">
          <ShoppingCartProductItem />
          <ShoppingCartProductItem />
        </div>
        <div className="col-md-4">
          <ShoppingCartTotalPrice />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
