import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/2.jpg";
import img2 from "../assets/3.png";
import img3 from "../assets/baelen.jpg";

const Carousal = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img alt="Number 1" src={img1} className="d-block w-100 img-fluid" />
        </div>
        <div className="carousel-item">
          <img alt="Number 2" src={img2} className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" alt="Number 3" />
        </div>
      </div>
      <Link
        className="carousel-control-prev"
        to="#carouselExampleFade"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </Link>
      <Link
        className="carousel-control-next"
        to="#carouselExampleFade"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </Link>
    </div>
  );
};

export default Carousal;
