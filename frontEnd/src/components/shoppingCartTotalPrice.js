import React from "react";

const ShoppingCartTotalPrice = () => {
  return (
    <div className="card">
      <div className="card-body d-flex flex-column align-items-center">
        <div className="card-title-item">Total: $100,000.99</div>
        <button className="btn btn-checkout mt-5">Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCartTotalPrice;
