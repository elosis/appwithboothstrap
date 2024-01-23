import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Books = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNextButtonClick = () => {
    toggleDropdown();
  };

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
        <div
          className={` carousel-inner d-flex flex-row justify-content-center gap-4 ${
            isDropdownOpen ? "dropdown-open" : ""
          }`}
        >
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
            <span>BESTSELLERS</span>
          </div>
          <div className="d-flex flex-column">
            <i className="bi bi-book custom-icon"></i>
            <span>NEW RELEASES</span>
          </div>
          <div className="d-flex flex-column">
            <i className="bi bi-pencil-square custom-icon"></i>
            <span>SIGNED EDITIONS</span>
          </div>
          <div className="d-flex flex-column">
            <i className="bi bi-optical-audio-fill custom-icon"></i>
            <span>AUDIOBOOKS</span>
          </div>
          <div className="d-flex flex-column">
            <i className="bi bi-scissors custom-icon"></i>
            <span>COUPONS & DEALS</span>
          </div>
          <div className="d-flex flex-column">
            <i className="bi bi-gift-fill custom-icon"></i>
            <span>GIFT CARDS</span>
          </div>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div className="d-flex flex-column">
                <i className="bi bi-search custom-icon" />
                <span>MYSTERY & CRIME</span>
              </div>
              <div className="d-flex flex-column">
                <i className="bi bi-rocket-takeoff-fill custom-icon" />
                <span>SCI-FI & FANTASY</span>
              </div>
              <div className="d-flex flex-column">
                <i className="bi bi-backpack-fill custom-icon" />
                <span>TEENS & YA</span>
              </div>
              <div className="d-flex flex-column">
                <i className="bi bi-music-note-beamed custom-icon" />
                <span>MUSIC & MOVIES</span>
              </div>
            </div>
          )}
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
          onClick={handleNextButtonClick}
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
