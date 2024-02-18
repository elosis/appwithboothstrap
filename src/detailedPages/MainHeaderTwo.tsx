import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const MainHeaderTwo = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="container">
      <div
        className="card mb-3 mx-auto mt-4 border-0"
        style={{ maxWidth: "840px" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781324064886_p0_v7_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D"
              className="img-fluid rounded-start"
              alt="..."
            />
            <div className="mt-4" style={{ color: "green" }}>
              <div className="d-flex gap-2" style={{ marginTop: "-15px" }}>
                <i className="bi bi-check-circle"></i>
                <p>BS Exclusives</p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">Wild and Distant Seas: A Novel</h4>
              <div className="d-flex gap-5 mb-4">
                <div className="d-flex gap-1">
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                </div>
                <div style={{ color: "darkgreen" }}>4.8</div>
              </div>
              <div className="border-top">
                <h6 className="h6 mt-1">Hardcover (BS Book Club Edition)</h6>
                <div className="d-flex gap-3 flex-row align-items-end">
                  <div style={{ fontSize: "32px" }}>$27.99</div>
                </div>
              </div>
              <div className="mt-3">
                <i className="bi bi-file-richtext"></i>
                <span>
                  {" "}
                  Premium Members get an additional 10% off AND collect stamps
                  to save with Rewards. 10 stamps = $5 reward
                </span>
              </div>
              <div className="text-center">
                <button className="btn btn-primary mt-3" onClick={handleShow}>
                  Buy
                </button>
              </div>
              {/* Modal */}
              <Modal show={showModal} onHide={handleClose}>
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
                    />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="XXX"
                    />
                  </div>

                  {/* Add more inputs as needed */}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Submit
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3>Overview</h3>
        <div className="border">
          <h6>Notes From Your Bookseller</h6>
          <div className="d-flex gap-5 ">
            <div>
              <p>
                Using Moby Dick as a starting point, Tara Karr Roberts crafts a
                gorgeous, character-driven narrative that is part retelling and
                part wholly original historical fiction. With a massive scope
                and a sprinkle of magic, this is ideal for fans of The Essex
                Serpent and Great Circle.
              </p>
              <p className="border-top mt-3">
                <strong>
                  A gorgeous debut, laced through with magic, following four
                  generations of women as they seek to chart their own futures.
                </strong>
              </p>
              <p className="border-top mt-4">
                Evangeline Hussey has made a home for herself on Nantucket,
                though she knows she is still an outsider to the island’s small,
                close-knit community, one that by 1849 has started to feel the
                decline of a once-thriving whaling industry. Her husband, Hosea,
                and the life they built together, was once all she needed—but
                now Hosea is gone, lost at sea. Evangeline is only able to hold
                on to his inn, and her
              </p>
            </div>
            <div>
              <p>
                place on the island, by employing a curious gift to glimpse and
                re-form the recent memories of those who would cast her out.
              </p>
              <p>
                One night, an idealistic sailor appears on her doorstep asking
                her to call him Ishmael. He seeks only a warm bed and a bowl of
                chowder, and yet suddenly, unsettlingly, her careful illusion
                begins to fracture. He soon sails away with Ahab to hunt an
                infamous white whale, and Evangeline is left to forge a new life
                from the pieces that remain.
              </p>
              <p>
                Her choices ripple through generations, across continents, and
                into the depths of the sea, in a narrative that follows
                Evangeline and her descendants from mid-nineteenth century
                Nantucket to Boston, Brazil, Florence, and Idaho. Moving,
                beautifully written, and elegantly conceived, Wild and Distant
                Seas takes Moby-Dick as its starting point, but Tara Karr
                Roberts brings four remarkable women to life in a spellbinding
                epic all her own.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeaderTwo;
