import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const SlideBooksOne = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="container">
      <Navbar />
      <div
        className="card mb-3 mx-auto mt-4 border-0"
        style={{ maxWidth: "840px" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781250334008_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D"
              className="img-fluid rounded-start"
              alt="..."
            />
            <div className="mt-4" style={{ color: "green" }}>
              <div className="d-flex gap-2">
                <i className="bi bi-check-circle"></i>
                <p>BS Exclusives</p>
              </div>
              <div className="d-flex gap-2" style={{ marginTop: "-15px" }}>
                <i className="bi bi-check-circle"></i>
                <p>Build Your Dark Academia Library</p>
              </div>
              <div className="d-flex gap-2" style={{ marginTop: "-15px" }}>
                <i className="bi bi-check-circle"></i>
                <p>Judge a Book by Its Edges</p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">Ninth House (BS Exclusive Edition)</h4>
              <div className="d-flex gap-5 mb-4">
                <div className="d-flex gap-1">
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star" style={{ color: "gold" }}></i>
                </div>
                <div style={{ color: "darkgreen" }}>4.1</div>
              </div>
              <div className="border-top">
                <h6 className="h6 mt-1">Paperback(BS Exclusive Edition) </h6>
                <div className="d-flex gap-3 flex-row align-items-end">
                  <div style={{ fontSize: "32px" }}>$17.99</div>
                  <div style={{ textDecorationLine: "line-through" }}>
                    $19.99
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
                Leigh Bardugo’s Ninth House is a dark academia novel packed with
                murder, mystery, and ghosts. When Alex Stern, who has the
                uncanny talent to communicate with the dead, is offered a spot
                in Yale’s incoming freshmen class, she’s more than skeptical of
                her acceptance. With paranormal occurrences and shady secret
                societies, Ninth House has earned its spot as your next binge
                read. Who knew ghost communication was a coveted skill at Yale?
              </p>
              <p className="border-top mt-3">
                <strong>
                  This BS Exclusive Edition has stained edges, a unique cover,
                  and a bonus annotated chapter from the author.
                </strong>
              </p>
              <p className="border-top mt-3">
                <strong>
                  From #1 New York Times bestselling author Leigh Bardugo comes
                  a mesmerizing tale of power, privilege, and dark magic set
                  among the Ivy League elite.
                </strong>
              </p>
              <p className="border-top mt-4">
                Galaxy “Alex” Stern is the most unlikely member of Yale’s
                freshman class. Raised in the Los Angeles hinterlands by a
                hippie mom, Alex dropped out of school early and into a world of
                shady drug-dealer boyfriends, dead-end jobs, and much, much
                worse. In fact, by age twenty, she is the sole survivor of a
              </p>
            </div>
            <div>
              <p>
                horrific, unsolved multiple homicide. Some might say she’s
                thrown her life away. But at her hospital bed, Alex is offered a
                second chance: to attend one of the world’s most prestigious
                universities on a full ride. What’s the catch, and why her?
              </p>
              <p>
                Still searching for answers, Alex arrives in New Haven tasked by
                her mysterious benefactors with monitoring the activities of
                Yale’s secret societies. Their eight windowless “tombs” are the
                well-known haunts of the rich and powerful, from high-ranking
                politicos to Wall Street’s biggest players. But their occult
                activities are more sinister and more extraordinary than any
                paranoid imagination might conceive. They tamper with forbidden
                magic. They raise the dead. And, sometimes, they prey on the
                living.
              </p>
              <p>
                Ninth House is the long-awaited adult debut by the beloved
                author of Shadow and Bone and Six of Crows. Leigh Bardugo will
                take her place alongside Lev Grossman and Deborah Harkness as
                one of the finest practitioners of literary fantasy writing
                today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBooksOne;
