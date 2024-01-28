import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Books from "./components/Books";
import Cards from "./components/Cards";
import Knowledge from "./components/Knowledge";
import Footer from "./components/Footer";
import StoresEvents from "./pages/StoresEvents";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Carousel />
                <Books />
                <Cards />
                <Knowledge />
              </div>
            }
          />
          <Route path="/stores" element={<StoresEvents />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
