import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Carousel = () => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide mt-5">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
          style={{ opacity: "0" }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          style={{ opacity: "0" }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          style={{ opacity: "0" }}
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/12/29/28406_Quote_B2_Book-Club_Mercury_12-29.jpg"
            className="d-block mini-photo mx-auto w-75"
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://dispatch.barnesandnoble.com/content/dam/ccr/BNApp/PromoCarousel/2024/01/28430_Quote_A-2_Wild-and-Distance-Seas_01-02.jpg"
            className="d-block mini-photo mx-auto w-75"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2024/01/09/28480_BB_D_Vday_01-09.jpg"
            className="d-block mini-photo mx-auto w-75"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
