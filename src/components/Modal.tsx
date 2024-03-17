import React from "react";
import { BookStoreContext, useContext } from "../store/context";
import { Modal as BootstrapModal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Modal = () => {
  const {
    bookStoreData: {
      showModal,
      cardNumber,
      cvv,
      showConfirmationModal,
      setShowConfirmationModal,
      orderNumber,
    },
    handleCloseModal,
    handleCardNumberChange,
    handleCVVChange,
    handleConfirmOrder,
  } = useContext(BookStoreContext);

  return (
    <div>
      <div>
        {/* Modal */}
        <BootstrapModal
          show={showModal}
          onHide={handleCloseModal}
          backdrop="static"
          keyboard={false}
        >
          <BootstrapModal.Header closeButton>
            <BootstrapModal.Title>Enter Card Information</BootstrapModal.Title>
          </BootstrapModal.Header>
          <BootstrapModal.Body>
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
          </BootstrapModal.Body>
          <BootstrapModal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleConfirmOrder}>
              Submit
            </Button>
          </BootstrapModal.Footer>
        </BootstrapModal>
      </div>
      <div>
        {/* Second Modal (Confirmation Modal) */}
        <BootstrapModal
          show={showConfirmationModal}
          onHide={() => setShowConfirmationModal(false)}
        >
          <BootstrapModal.Header closeButton>
            <BootstrapModal.Title>Order Confirmation</BootstrapModal.Title>
          </BootstrapModal.Header>
          <BootstrapModal.Body>
            <p>Thanks for your order. Your order is processing.</p>
            <p>Order number: {orderNumber}</p>
          </BootstrapModal.Body>
          <BootstrapModal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowConfirmationModal(false)}
            >
              Close
            </Button>
          </BootstrapModal.Footer>
        </BootstrapModal>
      </div>
    </div>
  );
};

export default Modal;
