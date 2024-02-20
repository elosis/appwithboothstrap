import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const SlideBooksTwo = () => {
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
              src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781250360717_p0_v4_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D"
              className="img-fluid rounded-start"
              alt="..."
            />
            <div className="mt-4" style={{ color: "green" }}>
              <div className="d-flex gap-2">
                <i className="bi bi-check-circle"></i>
                <p>The BS YA Book Club</p>
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
                A Fragile Enchantment (BS YA Book Club Edition)
              </h4>
              <div className="d-flex gap-5 mb-4">
                <div className="d-flex gap-1">
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star" style={{ color: "gold" }}></i>
                </div>
                <div style={{ color: "darkgreen" }}>4.4</div>
              </div>
              <div className="border-top">
                <h6 className="h6 mt-1">Paperback(BS Exclusive Edition) </h6>
                <div className="d-flex gap-3 flex-row align-items-end">
                  <div style={{ fontSize: "32px" }}>$20.00</div>
                  <div style={{ textDecorationLine: "line-through" }}>
                    $16.00
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
          <div className="row ">
            <div className="col-md-6">
              <p>
                A Fragile Enchantment packs all the pieces that make a YA
                romantasy sizzle into one delightful package. With courtly
                intrigue, heart-thumping romance and a unique magic built around
                enchanting clothes, this fully-realized world comes to life with
                dynamic characters and relationships you won't soon forget.
              </p>
              <p className="border-top mt-3">
                <strong>
                  The BS Book YA Club Edition includes an alternate cover,
                  unique case and case stamp, and designed endpapers.
                </strong>
              </p>
              <p className="border-top mt-3">
                <strong>
                  In this romantic fantasy of manners from New York Times
                  bestselling author Allison Saft, a magical dressmaker
                  commissioned for a royal wedding finds herself embroiled in
                  scandal when a gossip columnist draws attention to her
                  undeniable chemistry with the groom.
                </strong>
              </p>
              <p className="border-top mt-4">
                Niamh Ó Conchobhair has never let herself long for more. The
                magic in her blood that lets her stitch
              </p>
            </div>
            <div className="col-md-6">
              <p>
                emotions and memories into fabric is the same magic that will
                eventually kill her. Determined to spend the little time she has
                left guaranteeing a better life for her family, Niamh jumps at
                the chance to design the wardrobe for a royal wedding in the
                neighboring kingdom of Avaland.
              </p>
              <p>
                But Avaland is far from the fairytale that she imagined. While
                young nobles attend candlelit balls and elegant garden parties,
                unrest brews amid the working class. The groom himself, Kit
                Carmine, is prickly, abrasive, and begrudgingly being dragged to
                the altar as a political pawn. But when Niamh and Kit grow
                closer, an unlikely friendship blossoms into something
                more—until an anonymous gossip columnist starts buzzing about
                their chemistry, promising to leave them alone only if Niamh
                helps to uncover the royal family’s secrets. The rot at the
                heart of Avaland runs deep, but exposing it could risk a future
                she never let herself dream of, and a love she never thought
                possible.
              </p>
              <p>
                Transporting readers to a Regency England-inspired fantasy
                world, A Fragile Enchantment is a sweeping romance threaded with
                intrigue, unforgettable characters, and a love story for the
                ages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBooksTwo;
