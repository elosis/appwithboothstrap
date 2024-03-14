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
import { BookStoreLayer } from "./store/context";
import SearchedBooks from "./detailedPages/SearchedBooks";
import CarouselBooks from "./detailedPages/CarouselBooks";

function App() {
  return (
    <BookStoreLayer>
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Navbar />
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
            <Route path="/searchedbooks/:id" element={<SearchedBooks />} />
            <Route path="/carouselbooks/:id" element={<CarouselBooks />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </BookStoreLayer>
  );
}

export default App;
