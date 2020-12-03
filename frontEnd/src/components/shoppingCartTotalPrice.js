import React from "react";
import { Link } from "react-router-dom";
const ShoppingCartTotalPrice = () => {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body d-flex flex-column align-items-center">
        <div className="card-title-item">Total: $100,000.99</div>
        <Link to="/checkout">
          <button className="btn btn-checkout mt-5">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCartTotalPrice;
