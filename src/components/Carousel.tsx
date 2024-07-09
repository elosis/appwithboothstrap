import { useEffect, useState } from "react";
import { BookStoreContext, useContext } from "../store/context";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export interface CarouselResponse {
  id: number;
  imageUrl: string;
}

const Carousel = () => {
  const {
    bookStoreData: { carousel, loading },
    loadingCarousel,
  } = useContext(BookStoreContext);

  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    loadingCarousel();
  }, []);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === carousel.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carousel.length - 1 : prevIndex - 1
    );
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
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
        {carousel.map((data, i) => (
          <div
            key={i}
            // className="carousel-item"
            className={`carousel-item ${i === activeIndex ? "active" : ""}`}
            data-bs-interval="2000"
            onClick={() => {
              navigate(`/carouselbooks/${data.id}`);
            }}
          >
            <img
              src={data?.imageUrl}
              className="d-block mini-photo mx-auto w-75"
              alt={`Slide ${i + 1}`}
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
