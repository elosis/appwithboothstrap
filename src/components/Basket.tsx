import React from "react";
import { Navbar } from "react-bootstrap";
import { BookStoreContext, useContext } from "../store/context";

interface BasketProps {
  id: number;
  newPrice: number;
  oldPrice: number;
  star: number;
  vote: number;
  title: string;
  imageUrl: string;
  featureOne: string;
  featureTwo: string;
  featureThree: string;
  featureFour: string;
  overview: string;
  type: string;
}

const Basket: React.FC<BasketProps> = () => {
  const {
    bookStoreData: { basketItems },
  } = useContext(BookStoreContext);

  return (
    <div>
      <Navbar />
      <h3>Basket</h3>
      {basketItems.map((data, i) => (
        <div key={i}>
          <p>{data.title}</p>
          <p>{data.newPrice}</p>
        </div>
      ))}
    </div>
  );
};

export default Basket;
