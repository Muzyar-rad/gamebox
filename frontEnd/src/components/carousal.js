import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/2.jpg";
import img2 from "../assets/3.png";
import img3 from "../assets/baelen.jpg";
import "../css/carousal.css";

const Carousal = () => {
  return (
    <div className="my-4 container">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img alt="Number 1" src={img1} className="d-block mx-auto" />
          </div>
          <div className="carousel-item">
            <img alt="Number 2" src={img2} className="d-block mx-auto" />
          </div>
          <div className="carousel-item">
            <img alt="Number 3" src={img3} className="d-block mx-auto" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <i className="fa fa-arrow-left arrowCss"></i>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <i className="fa fa-arrow-right arrowCss"></i>
        </a>
      </div>
    </div>
  );
};

export default Carousal;
