import React from "react";
import { Link } from "react-router-dom";
import "../css/carousal.css";
import img1 from "../assets/2.jpg";
import img2 from "../assets/3.png";
import img3 from "../assets/baelen.jpg";

const Carousal = () => {
  return (
    <div className="mt-4 container">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img alt="Number 1" src={img1} className="d-block" />
          </div>
          <div className="carousel-item">
            <img alt="Number 2" src={img2} className="d-block" />
          </div>
          <div className="carousel-item">
            <img alt="Number 3" src={img3} className="d-block" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <div className="arrowCss">◀</div>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <div className="arrowCss">▶</div>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousal;
