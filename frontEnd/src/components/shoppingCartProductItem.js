import React from "react";

const ShoppingCartProductItem = () => {
  return (
    <div className="card mb-4 stand-out">
      <div className="card-body">
        <div className="row mb-4">
          <div className="col">
            <img
              className="card-img-fit mx-auto d-block"
              src={"/images/Alienware R10 Desktop.webp"}
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
              The Alienware Aurora R11 is engineered with 10th Gen Intel® Core™
              processors, optional liquid-cooled graphics and multiple upgrade
              options to achieve peak performance that lasts.
            </p>
            <button type="button" className="btn btn-danger text-light">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartProductItem;
