import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Books from "./components/Books";
import Cards from "./components/Cards";
import Knowledge from "./components/Knowledge";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/" element={<Books />} />
          <Route path="/" element={<Cards />} />
          <Route path="/" element={<Cards />} />
          <Route path="/" element={<Knowledge />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
