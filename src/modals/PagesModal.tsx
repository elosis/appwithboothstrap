import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { BookStoreContext } from "../store/context";

const PagesModal = () => {
  const {
    bookStoreData: { showModal, setCardNumber, setCVV, cardNumber, cvv },
    handleClose,
  } = useContext(BookStoreContext);

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    const formattedValue = value
      .replace(/(\d{4})/g, "$1 ")
      .trim()
      .slice(0, 19);

    setCardNumber(formattedValue);
  };

  const handleCVVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    const formattedValue = value.slice(0, 3);

    setCVV(formattedValue);
  };

  const handleCloseModal = () => {
    setCardNumber("");
    setCVV("");
    handleClose();
  };

  const handleBuy = () => {
    setCardNumber("");
    setCVV("");
    handleClose();
  };

  return (
    <div>
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
  );
};

export default PagesModal;
