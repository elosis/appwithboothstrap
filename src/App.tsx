import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Books from "./components/Books";
import Cards from "./components/Cards";
import Knowledge from "./components/Knowledge";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Books />
      <Cards />
      <Knowledge />
    </div>
  );
}

export default App;
