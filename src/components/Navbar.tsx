import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookStoreContext, useContext } from "../store/context";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

interface NavBarResponse {
  id: number;
  bookId: number;
  title: string;
  Star: number;
  imageURL: string;
}

interface EbooksHistoryItem {
  imageUrl: string;
}

interface NavBarProps {}

const Navbar: React.FC<NavBarProps> = () => {
  const navigate = useNavigate();
  const {
    bookStoreData: {
      books,
      setSearchQuery,
      filteredBooks,
      setFilteredBooks,
      searchQuery,
    },
    loadingBooks,
  } = useContext(BookStoreContext);

  useEffect(() => {
    loadingBooks();
  }, []);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  const handleSearchButtonClick = () => {
    navigate(`/searchedbooks?q=${searchQuery}`);
  };

  const handleBookClick = (bookId: number) => {
    const selectedBook = books.find((book) => book.id === bookId);
    if (selectedBook) {
      navigate(`/searchedbooks/${bookId}`);
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
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={() => navigate("/")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => navigate("/stores")}
              >
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
                    onClick={() => navigate("/fiction")}
                  >
                    Fiction
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => navigate("/ebooks")}
                  >
                    eBooks
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => navigate("/kids")}
                  >
                    Kids
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <></>
          <div className="d-flex gap-4">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              {searchQuery && filteredBooks.length > 0 && (
                <div className="position-relative">
                  <div
                    className="dropdown-menu show mt-1 position-absolute"
                    style={{ top: "100%", left: "-214px", opacity: "0.9" }}
                  >
                    {filteredBooks.map((book) => (
                      <div
                        key={book.id}
                        className="dropdown-item"
                        onClick={() => {
                          handleBookClick(book.id);
                        }}
                      >
                        <div className="d-flex gap-2">
                          <img
                            src={book.imageUrl}
                            style={{ width: "20px" }}
                            alt={book.title}
                          />
                          <div>{book.title}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={handleSearchButtonClick}
              >
                Search
              </button>
            </form>
            <Link to="/basket" className="btn btn-outline-primary me-2">
              <i className="bi bi-cart2"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
