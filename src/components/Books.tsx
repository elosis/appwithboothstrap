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
      <div className="mt-5">
        <div
          className={`d-flex flex-row justify-content-center gap-4 ${
            isDropdownOpen ? "dropdown-open" : ""
          }`}
        >
          <div
            className={`left-arrow-container ${isDropdownOpen ? "hidden" : ""}`}
          >
            <div className="left-arrow-head"></div>
          </div>
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

          <div
            className="right-arrow-container"
            onClick={handleNextButtonClick}
          >
            <div className="right-arrow-head"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
