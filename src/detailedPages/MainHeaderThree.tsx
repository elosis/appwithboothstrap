import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const MainHeaderThree = () => {
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
              src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780593802991_p0_v5_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D"
              className="img-fluid rounded-start"
              alt="..."
            />
            <div className="mt-4" style={{ color: "green" }}>
              <div className="d-flex gap-2">
                <i className="bi bi-check-circle"></i>
                <p>BS Book Club</p>
              </div>
              <div className="d-flex gap-2" style={{ marginTop: "-15px" }}>
                <i className="bi bi-check-circle"></i>
                <p>BS Exclusives</p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">
                Good Material (BS Book Club Edition)
              </h4>
              <div className="d-flex gap-5 mb-4">
                <div className="d-flex gap-1">
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star" style={{ color: "gold" }}></i>
                </div>
                <div style={{ color: "darkgreen" }}>4.0</div>
              </div>
              <div className="border-top">
                <h6 className="h6 mt-1">Hardcover (BS Book Club Edition)</h6>
                <div className="d-flex gap-3 flex-row align-items-end">
                  <div style={{ fontSize: "32px" }}>$25.20</div>
                  <div style={{ textDecorationLine: "line-through" }}>
                    $28.00
                  </div>
                  <div>|</div>
                  <div style={{ color: "red" }}>Save 10%</div>
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
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Surname</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Card Number</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input type="text" className="form-control" />
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
              <div className="border-top mt-3"></div>
              <p className="text-center border border-dark-subtle mt-3 p-1">
                Join us on Tuesday, March 5 at 3 PM ET when Dolly Alderton
                discusses her new novel and our February Book Club selection
                GOOD MATERIAL. Please register on Eventbrite to attend this
                event. Click here to learn more.
              </p>
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
                Witty, clever and biting, Good Material is an exploration of
                friendship, love and the many forms a relationship can take.
                Great for fans of Curtis Sittenfeld and Emily Henry.
              </p>
              <p className="border-top mt-3">
                <strong>
                  This Barnes & Noble Book Club Edition has special embossing on
                  the cover and a reading group guide.
                </strong>
              </p>
              <p className="border-top mt-4">
                <strong>
                  From the New York Times best-selling author of Ghosts and
                  Everything I Know About Love: a story of heartbreak and
                  friendship and how to survive both
                </strong>
              </p>
              <p className="mt-4">
                Andy loves Jen. Jen loved Andy. And he can't work out why she
                stopped.
              </p>
              <p className="mt-4">Now he is...</p>
            </div>
            <div>
              <p>Without a home</p>
              <p>Waiting for his stand-up career to take off</p>
              <p>
                Wondering why everyone else around him seems to have grown up
                while he wasn't looking
              </p>
              <p>
                Set adrift on the sea of heartbreak, Andy clings to the idea of
                solving the puzzle of his ruined relationship. Because if he can
                find the answer to that, then maybe Jen can find her way back to
                him. But Andy still has a lot to learn, not least his
                ex-girlfriend's side of the story…
              </p>
              <p>
                In this sharply funny and exquisitely relatable story of
                romantic disaster and friendship, Dolly Alderton offers up a
                love story with two endings, demonstrating once again why she is
                one of the most exciting writers today, and the true voice of a
                generation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeaderThree;
