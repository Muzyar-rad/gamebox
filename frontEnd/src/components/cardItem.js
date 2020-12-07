import React from "react";

const CardItem = (props) => {
  return (
    <div className="col-md-6 col-lg-4 pb-5">
      <div className="card stand-out h-100">
        <img
          className="card-img-top card-img-fit p-2"
          src={props.product.imagePath}
          alt={`product_pic_${props.product.productId}`}
        />
        <div className="card-body">
          <h5 className="card-title">{props.product.name}</h5>
          <p className="card-text">
            <small className="text-muted">{props.product.price}</small>
          </p>
          <p className="card-text">{props.product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
