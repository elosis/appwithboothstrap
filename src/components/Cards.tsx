import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { BookStoreContext, useContext } from "../store/context";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";

interface CardsProps {
  id?: number;
  Title?: string;
  Star?: number;
  imageURL?: string;
  imageUrl?: string;
}

const Cards: React.FC<CardsProps> = () => {
  const navigate = useNavigate();

  const {
    bookStoreData: {
      loading,
      cards,
      cvv,
      windowWidth,
      cardNumber,
      showModal,
      setWindowWidth,
      visibleCardIndexes,
      setVisibleCardIndexes,
    },
    loadingCards,
    handleCloseModal,
    handleShow,
    handleCardNumberChange,
    handleCVVChange,
    handlePrevButtonClick,
    handleNextButtonClick,
    handleBuy,
    EbooksHistoryData,
  } = useContext(BookStoreContext);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 463) {
        setVisibleCardIndexes([0]);
      } else if (window.innerWidth < 768) {
        setVisibleCardIndexes(visibleCardIndexes.slice(0, 2));
      } else if (window.innerWidth < 1200) {
        setVisibleCardIndexes(visibleCardIndexes.slice(0, 3));
      } else {
        setVisibleCardIndexes([0, 1, 2, 3, 4]);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    loadingCards();
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="mt-5">
      <h2 className="h2 text-center">Build your library !</h2>
      <div className="mt-3 mx-auto d-flex gap-5" style={{ maxWidth: "1436px" }}>
        <div className="card " style={{ width: "18rem", border: "none" }}>
          <img
            src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250334206_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
            className="card-img-top w-100"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Gothikana</h5>
            <div className="d-flex gap-1">
              <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
              <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
              <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
              <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
              <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
            </div>

            <p className="card-text mt-2">
              The eternal romance of Beauty and the Beast meets the gothic
              suspense of Dracula in this mysterious story centered around a
              love that blossoms in the unlikeliest of places.
            </p>
            <div className="text-center">
              <button className="btn btn-primary mt-3" onClick={handleShow}>
                Buy
              </button>
            </div>
          </div>
        </div>
        <div className="container text-center d-flex flex-column gap-4">
          <div className="row">
            {cards?.map((data, i) => (
              <div
                className="card "
                key={i}
                style={{ width: "18rem", border: "none" }}
              >
                <img
                  src={data?.imageURL}
                  alt={data?.Title}
                  className="card-img-top w-50 mx-auto cards-img"
                />
                <div
                  className="card-body"
                  style={{ padding: "12px 12px 0px 12px" }}
                >
                  <h5 className="card-title ">{data?.Title}</h5>
                </div>
                <div className="d-flex gap-1 justify-content-center">
                  {Array.from(
                    { length: Math.floor(data?.Star) },
                    (_, index) => (
                      <i
                        key={`full-${index}`}
                        className="bi bi-star-fill"
                        style={{ color: "gold" }}
                      ></i>
                    )
                  )}
                  {data?.Star % 1 !== 0 && (
                    <i
                      className="bi bi-star-half"
                      style={{ color: "gold" }}
                    ></i>
                  )}
                </div>
                <div className="text-center mb-5  ">
                  <button className="btn btn-primary mt-3" onClick={handleShow}>
                    Buy
                  </button>
                </div>
                {/* Modal */}
                <Modal
                  show={showModal}
                  onHide={handleCloseModal}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Enter Card Information</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {/* Form inputs for card information */}
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Joe"
                      />
                    </div>
                    <div className="form-group">
                      <label>Surname</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Doe"
                      />
                    </div>
                    <div className="form-group">
                      <label>Card Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="XXXX XXXX XXXX XXXX"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>CVV</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="XXX"
                        value={cvv}
                        onChange={handleCVVChange}
                      />
                    </div>
                    {/* Add more inputs as needed */}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleBuy}>
                      Submit
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="text-center " style={{ marginTop: "100px" }}>
          <h4>For the History Buff</h4>
        </div>
        <div
          className="d-flex justify-content-center mt-5"
          style={{ paddingLeft: "15px" }}
        >
          <div
            className="left-arrow-container"
            onClick={handlePrevButtonClick}
            style={{ marginRight: "85px" }}
          >
            <div className="left-arrow-head"></div>
          </div>
          {visibleCardIndexes.map((index) => (
            <div
              key={index}
              className={`card mx-2 position-relative`}
              style={{ width: "18rem", border: "none" }}
            >
              <div className="card-content">
                <img
                  src={EbooksHistoryData[index].imageUrl}
                  className="card-img-top w-50 mx-auto cards-img"
                  alt="Book Cover"
                />
                <div
                  className="card-body text-center w-50"
                  style={{ fontSize: "12px" }}
                ></div>
                {windowWidth >= 1400 && (
                  <button
                    className="quick-add-button-cards"
                    onClick={handleShow}
                  >
                    QUICK ADD
                  </button>
                )}
              </div>
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

export default Cards;
