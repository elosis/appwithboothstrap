import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Books = () => {
  return (
    <div className="container mx-auto text-center mt-5">
      <h1>FIND YOUR PLACE AT ONLINE BOOKSTORE</h1>
      <p>
        Over 3 million books ready to ship, 1.6 million eBooks and 100,000
        audiobooks to download right now! Curbside pickup available in most
        stores!
      </p>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide mt-5"
      >
        <div className="carousel-inner d-flex flex-row justify-content-center gap-4">
          <div className="d-flex flex-column">
            <i className="bi bi-bookshelf custom-icon" />
            <span>BOOKSHELF</span>
          </div>
          <div className="d-flex flex-column">
            <i className="bi bi-person-square custom-icon" custom-icon></i>
            <span>MEMBERSHIP</span>
          </div>
          <div className="d-flex flex-column">
            <i className="bi bi-wallet-fill custom-icon"></i>
            <span>BESTSELLERS https://www.barnesandnoble.com/</span>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Books;
