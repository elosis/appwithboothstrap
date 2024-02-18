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
import Fiction from "./pages/Fiction";
import Ebooks from "./pages/Ebooks";
import Kids from "./pages/Kids";
import MainHeaderOne from "./detailedPages/MainHeaderOne";
import MainHeaderTwo from "./detailedPages/MainHeaderTwo";
import MainHeaderThree from "./detailedPages/MainHeaderThree";

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
          <Route path="/fiction" element={<Fiction />} />
          <Route path="/ebooks" element={<Ebooks />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/mainheaderone" element={<MainHeaderOne />} />
          <Route path="/mainheadertwo" element={<MainHeaderTwo />} />
          <Route path="/mainheaderthree" element={<MainHeaderThree />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
