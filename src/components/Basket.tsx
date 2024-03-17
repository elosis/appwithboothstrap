import React, { useState } from "react";
import { BookStoreContext, useContext } from "../store/context";
import Navbar from "../components/Navbar";
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
  } = useContext(BookStoreContext);

  const initialQuantities: Quantities = basketItems.reduce((acc, item) => {
    if (item.id) {
      acc[item.id] = 1;
    }
    return acc;
  }, {});

  const [quantities, setQuantities] = useState<Quantities>(initialQuantities);

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

  return (
    <div>
      <Navbar />
      <h3 className="mt-5">My Orders</h3>
      <div className="d-flex justify-content-around">
        <div className="border">
          {basketItems.map((data, i) => (
            <div
              key={i}
              className="d-flex mt-5 gap-5 flex-row align-items-center"
            >
              <img
                src={data.imageUrl}
                style={{ width: "5%" }}
                alt={data.title}
              />
              <p>{data.title}</p>
              <div className="input-group" style={{ width: "150px" }}>
                <button
                  type="button"
                  className="btn btn-default btn-number"
                  onClick={() => decrementQuantity(data.id ?? -1)}
                >
                  <span className="glyphicon glyphicon-minus text-dark">-</span>
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
                  <span className="glyphicon glyphicon-plus text-dark">+</span>
                </button>
              </div>
              <p>
                $
                {calculateNewPrice(
                  data.newPrice ?? 0,
                  quantities[data.id ?? -1] ?? 1
                ).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        <div className="border p-3">
          <h6>Order Summary</h6>
          <div className="d-flex gap-5">
            <p>Total Amount</p>
            <p>${totalAmount.toFixed(2)}</p>
          </div>
          <div className="d-flex gap-5">
            <p>Cargo Expense</p>
            <p>${totalCargoExpense.toFixed(2)}</p>
          </div>
          <div className=" container text-center mt-2 word-line" />
          <div className="d-flex gap-5">
            <p>Total</p>
            <p style={{ color: "orange" }}>${grandTotal.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
