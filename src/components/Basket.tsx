import React, { useEffect, useState } from "react";
import { BookStoreContext, useContext } from "../store/context";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

interface BasketProps {
  id?: number;
  newPrice?: number;
  oldPrice?: number;
  star?: number;
  vote?: number;
  title?: string;
  imageUrl?: string;
  featureOne?: string;
  featureTwo?: string;
  featureThree?: string;
  featureFour?: string;
  overview?: string;
  type?: string;
}

interface Quantities {
  [key: number]: number;
}

const Basket: React.FC<BasketProps> = () => {
  const {
    bookStoreData: { basketItems },
    removeFromBasket,
    handleShow,
  } = useContext(BookStoreContext);

  const initialQuantities: Quantities = basketItems.reduce((acc, item) => {
    if (item.id) {
      acc[item.id] = 1;
    }
    return acc;
  }, {} as Quantities);

  const [quantities, setQuantities] = useState<Quantities>(initialQuantities);
  const [isMobileView, setIsMobileView] = useState(false);

  const incrementQuantity = (id: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };

  const decrementQuantity = (id: number) => {
    if (quantities[id] && quantities[id] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: prevQuantities[id] - 1,
      }));
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: value,
      }));
    }
  };

  const calculateNewPrice = (price: number, quantity: number) => {
    return price * quantity;
  };

  const totalAmount = basketItems.reduce(
    (total, currentItem) =>
      total +
      calculateNewPrice(
        currentItem.newPrice ?? 0,
        quantities[currentItem.id ?? -1] ?? 0
      ),
    0
  );

  const totalCargoExpense = totalAmount * 0.28;

  const grandTotal = totalAmount + totalCargoExpense;

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 920);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <div>
          <h3 className="text-center mt-5">
            Shopping Card ({basketItems.length}{" "}
            {basketItems.length === 1 ? "item" : "items"})
          </h3>
        </div>
        <div
          className={`d-flex justify-content-around mt-4 ${
            isMobileView ? "flex-column" : ""
          }`}
        >
          <div className="p-1">
            {basketItems.map((data, i) => (
              <div
                key={i}
                className="container d-flex mt-5 mb-5 flex-row align-items-center"
                style={{ gap: `${isMobileView ? "5px" : "40px"}` }}
              >
                <img
                  src={data.imageUrl}
                  style={{ width: "5%" }}
                  alt={data.title}
                />
                <div>
                  <p className="dynamic-width">{data.title}</p>
                  <div className="d-flex gap-1 align-items-center">
                    {Array.from(
                      { length: Math.floor(data?.star || 0) },
                      (_, index) => (
                        <i
                          key={`full-${index}`}
                          className="bi bi-star-fill"
                          style={{ color: "gold" }}
                        ></i>
                      )
                    )}
                    {data?.star && data.star % 1 !== 0 && (
                      <i
                        className="bi bi-star-half"
                        style={{ color: "gold" }}
                      ></i>
                    )}
                  </div>
                </div>
                <div className="input-group" style={{ width: "150px" }}>
                  <button
                    type="button"
                    className="btn btn-default btn-number"
                    onClick={() => decrementQuantity(data.id ?? -1)}
                  >
                    <span className="glyphicon glyphicon-minus text-dark">
                      -
                    </span>
                  </button>
                  <input
                    type="number"
                    name="quantity"
                    className="form-control input-number text-center"
                    value={quantities[data.id ?? -1] ?? 1}
                    min="1"
                    onChange={(e) => handleInputChange(e, data.id ?? -1)}
                  />
                  <button
                    type="button"
                    className="btn btn-default btn-number"
                    onClick={() => incrementQuantity(data.id ?? -1)}
                  >
                    <span className="glyphicon glyphicon-plus text-dark">
                      +
                    </span>
                  </button>
                </div>
                <div>
                  $
                  {calculateNewPrice(
                    data.newPrice ?? 0,
                    quantities[data.id ?? -1] ?? 1
                  ).toFixed(2)}
                </div>
                <div onClick={() => removeFromBasket(data.id)}>
                  <i className="bi bi-trash" style={{ cursor: "pointer" }}></i>
                </div>
              </div>
            ))}
          </div>
          <div className="border p-3 d-flex flex-column justify-content-center">
            <h6>Order Summary</h6>
            <div className="d-flex gap-5 mt-5">
              <p style={{ width: "100px" }}>Total Amount</p>
              <p>${totalAmount.toFixed(2)}</p>
            </div>
            <div className="d-flex gap-5 mt-3">
              <p style={{ width: "100px" }}>Cargo Expense</p>
              <p>${totalCargoExpense.toFixed(2)}</p>
            </div>
            <div className=" container text-center mt-3 word-line" />
            <div className="d-flex gap-5">
              <p style={{ width: "100px" }}>Total</p>
              <p style={{ color: "orange" }}>${grandTotal.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-primary" onClick={handleShow}>
          Buy
        </button>
      </div>
      <Modal />
    </div>
  );
};

export default Basket;
