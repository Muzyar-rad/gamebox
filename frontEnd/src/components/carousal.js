import React from "react";
import { Link } from "react-router-dom";

const Carousal = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={"../assets/baelen.jpg"}
            className="d-block w-100"
            alt="Number 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src={"../assets/2.jpg"}
            className="d-block w-100"
            alt="Number 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src={"../assets/3.jpg"}
            className="d-block w-100"
            alt="Number 3"
          />
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
