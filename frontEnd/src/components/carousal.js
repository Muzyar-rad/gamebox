import React from "react";
import "../css/carousal.css";

const Carousal = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            height="500"
            src={require("../assets/img/gaming_laptop_1.png")}
            alt="First slide"
          />
          <div class="carousel-caption d-block">
            <h5>Keep Players Inside the Game</h5>
            <p>
              Allow players to purchase anything they want within the game,
              without disrupting play.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            height="500"
            src={require("../assets/img/gaming_laptop_2.jpg")}
            alt="Second slide"
          />
          <div class="carousel-caption d-block">
            <h5>Provide Personalized Offerings</h5>
            <p>
              Cross sell, up sell, and promote impulse buys, targeted offers,
              and exclusive, real-world, game-related merchandise.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            height="500"
            src={require("../assets/img/gaming_laptop_3.webp")}
            alt="Third slide"
          />
          <div class="carousel-caption d-block">
            <h5>Unify the Players’ Experience</h5>
            <p>
              Whether players purchase in-game on a traditional PC, mobile
              device or in-store, all transactions are seamlessly visible across
              all channels.
            </p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousal;
