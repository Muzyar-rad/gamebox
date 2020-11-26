import React from "react";

const Cards = () => {
  return (
    <div className="card-deck p-5">
      <div className="row p-3">
        <div className="card col-4 h-100">
          <img
            className="card-img-top p-2"
            src={require("../assets/img/Alienware R10 Desktop.webp")}
            alt="product_pic_1"
          />
          <div className="card-body">
            <h5 className="card-title">Alienware Aurora R10 Gaming Desktop</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card col-4">
          <img
            className="card-img-top"
            src={require("../assets/img/Alienware R11 Desktop.webp")}
            alt="product_pic_2"
          />
          <div className="card-body">
            <h5 className="card-title">Alienware Aurora R11 Gaming Desktop</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card col-4">
          <img
            className="card-img-top"
            src={require("../assets/img/Alienware Area 51m Laptop.jpg")}
            alt="product_pic_3"
          />
          <div className="card-body">
            <h5 className="card-title">Alienware Area 51 Gaming Laptop</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      <div className="row p-3">
        <div className="card col-4">
          <img
            className="card-img-top"
            src={require("../assets/img/Alienware M17 Laptop.webp")}
            alt="product_pic_3"
          />
          <div className="card-body">
            <h5 className="card-title">Alienware M17 Gaming Laptop</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card col-4">
          <img
            className="card-img-top"
            src={require("../assets/img/Dell G5 Gaming Desktop.webp")}
            alt="product_pic_3"
          />
          <div className="card-body">
            <h5 className="card-title">Dell G5 Gaming Desktop</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card col-4">
          <img
            className="card-img-top"
            src={require("../assets/img/corsair vengeance 7200i.png_515Wx515H")}
            alt="product_pic_3"
          />
          <div className="card-body">
            <h5 className="card-title">
              CORSAIR Vengeance i7200 Gaming Desktop
            </h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      <div className="card col-4">
        <img
          className="card-img-top"
          src={require("../assets/img/Razer Blade 15 Gaming Laptop.webp")}
          alt="product_pic_3"
        />
        <div className="card-body">
          <h5 className="card-title">Razer Blade 15 Gaming Desktop</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
