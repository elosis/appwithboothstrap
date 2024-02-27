import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookStoreLayer, BookStoreContext, useContext } from "../store/context";
import "bootstrap/dist/css/bootstrap.min.css";

interface NavBarResponse {
  id: number;
  Title: string;
  Star: number;
  imageURL: string;
}

interface EbooksHistoryItem {
  imageUrl: string;
}

interface NavBarProps {
  index: number;
  loading: boolean;
  cards: NavBarResponse[];
  cvv: string;
  windowWidth: number;
  cardNumber: string;
  showModal: boolean;
  setWindowWidth: React.Dispatch<React.SetStateAction<number>>;
  visibleCardIndexes: number[];
  setVisibleCardIndexes: React.Dispatch<React.SetStateAction<number[]>>;
  loadingCards: () => void;
  handleCloseModal: () => void;
  handleShow: () => void;
  handleCardNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCVVChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePrevButtonClick: () => void;
  handleNextButtonClick: () => void;
  handleBuy: () => void;
  EbooksHistoryData: EbooksHistoryItem[];
}

const Navbar: React.FC<NavBarProps> = () => {
  const navigate = useNavigate();
  const {
    bookStoreData: { books },
  } = useContext(BookStoreContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = books.filter((book) =>
      book.Title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  const handleBookClick = (bookId) => {
    const selectedBook = books.find((book) => book.id === bookId);
    if (selectedBook) {
      navigate(`/detailedPages/${selectedBook.category}/${bookId}`);
    }
    setSearchQuery("");
    setFilteredBooks([]);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mx-auto">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={() => navigate("/")}>
          B&S
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" onClick={() => navigate("/")}>
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item" onClick={() => navigate("stores")}>
              <a className="nav-link" href="#">
                Stores & Events
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Books
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => navigate("fiction")}
                  >
                    Fiction
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => navigate("ebooks")}
                  >
                    eBooks
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => navigate("kids")}
                  >
                    Kids
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            {searchQuery && (
              <div className="dropdown-menu show">
                {filteredBooks.map((book) => (
                  <button
                    key={book.id}
                    className="dropdown-item"
                    onClick={() => handleBookClick(book.id)}
                  >
                    {book.title}
                  </button>
                ))}
              </div>
            )}
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
