import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { BookStoreContext } from "../store/context";

const CarouselBooksModal = () => {
  const {
    bookStoreData: { showModal },
    handleClose,
  } = useContext(BookStoreContext);

  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Card Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form inputs for card information */}
          <div className="form-group">
            <label>First Name</label>
            <input type="text" className="form-control" placeholder="Joe" />
          </div>
          <div className="form-group">
            <label>Surname</label>
            <input type="text" className="form-control" placeholder="Doe" />
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
            <input type="text" className="form-control" placeholder="XXX" />
          </div>
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
  );
};

export default CarouselBooksModal;
