import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Books = () => {
  const icons = [
    { icon: "bi-bookshelf", text: "BOOKSHELF" },
    { icon: "bi-person-square", text: "MEMBERSHIP" },
    { icon: "bi-wallet", text: "BESTSELLERS" },
    { icon: "bi-book", text: "NEW RELEASES" },
    { icon: "bi-pencil", text: "SIGNED EDITIONS" },
    { icon: "bi-optical-audio", text: "AUDIOBOOKS" },
    { icon: "bi-scissors", text: "COUPONS & DEALS" },
    { icon: "bi-gift", text: "GIFT CARDS" },
    { icon: "bi-search", text: "MYSTERY & CRIME" },
    { icon: "bi-rocket", text: "SCI-FI & FANTASY" },
    { icon: "bi-backpack", text: "TEENS & YA" },
    { icon: "bi-music-note-beamed", text: "MUSIC & MOVIES" },
  ];

  const [visibleIconIndexes, setVisibleIconIndexes] = useState([
    0, 1, 2, 3, 4, 5, 6, 7,
  ]);

  const handleNextButtonClick = () => {
    const nextIndexes = visibleIconIndexes.map(
      (index) => (index + 1) % icons.length
    );
    setVisibleIconIndexes(nextIndexes);
  };

  const handlePrevButtonClick = () => {
    const prevIndexes = visibleIconIndexes.map(
      (index) => (index - 1 + icons.length) % icons.length
    );
    setVisibleIconIndexes(prevIndexes);
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
        <div className="d-flex flex-row justify-content-center gap-4">
          <div className="left-arrow-container" onClick={handlePrevButtonClick}>
            <div className="left-arrow-head"></div>
          </div>
          {visibleIconIndexes.map((index) => (
            <div
              key={index}
              className={`icon-container ${
                visibleIconIndexes.length > 1 ? "transition" : ""
              }`}
              style={{ width: "120px" }}
            >
              <i className={`bi ${icons[index].icon} custom-icon`} />
              <span>{icons[index].text}</span>
            </div>
          ))}
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
