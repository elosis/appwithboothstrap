import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const MainHeader = () => {
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
              src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781250359513_p0_v6_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D"
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
              <h4 className="card-title">Mercury (BS Book Club Edition)</h4>
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
                  <div style={{ fontSize: "32px" }}>$23.20</div>
                  <div style={{ textDecorationLine: "line-through" }}>
                    $29.00
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
                From the author who blessed us with Shiner comes a story packed
                with the twists of a propulsive mystery and the meaningful
                character connections of a good literary tale. It's the story of
                dysfunctional family, finding oneself and the gray area between
                heroes and villains. Great for fans of The People We Keep.
              </p>
              <p className="border-top mt-3">
                <strong>
                  This Bookstore Book Club Edition has a unique cover and
                  includes an interview with the author and discussion
                  questions.
                </strong>
              </p>
              <p className="border-top mt-4">
                <strong>
                  A roofing family’s bonds of loyalty are tested when they
                  uncover a long-hidden secret at the heart of their blue-collar
                  town—from Amy Jo Burns, author of the critically acclaimed
                  novel Shiner
                </strong>
              </p>
            </div>
            <div className="col-md-6">
              <p>
                It’s 1990 and seventeen-year-old Marley West is blazing into the
                river valley town of Mercury, Pennsylvania. A perpetual loner,
                she seeks a place at someone’s table and a family of her own.
                The first thing she sees when she arrives in town is three men
                standing on a rooftop. Their silhouettes blot out the sun.
              </p>
              <p>
                The Joseph brothers become Marley’s whole world before she can
                blink. Soon, she is young wife to one, The One Who Got Away to
                another, and adopted mother to them all. As their own mother
                fades away and their roofing business crumbles under the weight
                of their unwieldy father’s inflated ego, Marley steps in to
                shepherd these unruly men. Years later, an eerie discovery in
                the church attic causes old wounds to resurface and suddenly the
                family’s survival hangs in the balance. With Marley as their
                light, the Joseph brothers must decide whether they can save the
                family they’ve always known—or whether together they can build
                something stronger in its place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
