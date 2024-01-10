import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Books from "./components/Books";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Books />
      <Cards />
    </div>
  );
}

export default App;
