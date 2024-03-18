import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { BookStoreContext, useContext } from "../store/context";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export interface SingleBookProps {
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
  quantity: number;
}

const SearchedBook = () => {
  const {
    bookStoreData: { setError, showModal },
    handleBuySingle,
    handleClose,
  } = useContext(BookStoreContext);
  const { id } = useParams();
  const [singleBook, setSingleBook] = useState<SingleBookProps | null>();

  useEffect(() => {
    const getData = async () => {
      await axios
        .get<SingleBookProps[]>(
          `https://sfvmzovrujwtnthorsww.supabase.co/rest/v1/Books?id=eq.${id}&select=*`,
          {
            headers: {
              apikey:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmdm16b3ZydWp3dG50aG9yc3d3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3OTA2ODQsImV4cCI6MjAyNDM2NjY4NH0.yQr7ifZsyEBxhcAYGkMuP7CnAiOmq1kQ_93ZWqB45jc",
            },
          }
        )
        .then((res) => {
          setSingleBook(res.data[0]);
        })
        .catch((err) => {
          const error =
            err.response && err.response.status === 404 ? "error" : "no error";
          setError(error);
        });
    };
    getData();
  }, [id]);

  useEffect(() => {
    console.log("singleBook:", singleBook);
  }, [singleBook]);

  return (
    <div>
      <Navbar />
      {singleBook ? (
        <div className="container">
          <div
            className="card mb-3 mx-auto mt-4 border-0"
            // style={{ maxWidth: "840px" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img src={singleBook?.imageUrl} alt="..." className="w-75" />
                <div className="mt-4" style={{ color: "green" }}>
                  {singleBook?.featureOne && (
                    <div
                      className="d-flex gap-2"
                      style={{ marginTop: "-15px" }}
                    >
                      <i className="bi bi-check-circle"></i>
                      <p>{singleBook?.featureOne}</p>
                    </div>
                  )}
                  {singleBook?.featureTwo && (
                    <div
                      className="d-flex gap-2"
                      style={{ marginTop: "-15px" }}
                    >
                      <i className="bi bi-check-circle"></i>
                      <p>{singleBook?.featureTwo}</p>
                    </div>
                  )}
                  {singleBook?.featureThree && (
                    <div
                      className="d-flex gap-2"
                      style={{ marginTop: "-15px" }}
                    >
                      <i className="bi bi-check-circle"></i>
                      <p>{singleBook?.featureThree}</p>
                    </div>
                  )}
                  {singleBook?.featureFour && (
                    <div className="d-flex gap-2">
                      <i className="bi bi-check-circle"></i>
                      <p>{singleBook?.featureFour}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title">{singleBook?.title}</h4>
                  <div className="d-flex gap-5 mb-4">
                    <div className="d-flex gap-1 justify-content-center">
                      {Array.from(
                        { length: Math.floor(singleBook?.star) },
                        (_, index) => (
                          <i
                            key={`full-${index}`}
                            className="bi bi-star-fill"
                            style={{ color: "gold" }}
                          ></i>
                        )
                      )}
                      {singleBook?.star % 1 !== 0 && (
                        <i
                          className="bi bi-star-half"
                          style={{ color: "gold" }}
                        ></i>
                      )}
                    </div>
                    <div style={{ color: "darkgreen" }}>{singleBook?.vote}</div>
                  </div>
                  <div className="border-top">
                    <h6 className="h6 mt-1">{singleBook?.type}</h6>
                    <div className="d-flex gap-3 flex-row align-items-end">
                      <div style={{ fontSize: "32px" }}>
                        {singleBook?.newPrice}
                      </div>
                      <div style={{ textDecorationLine: "line-through" }}>
                        {singleBook?.oldPrice}
                      </div>
                      <div>|</div>
                      <div style={{ color: "red" }}>Save 10%</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <i className="bi bi-file-richtext"></i>
                    <span>
                      {" "}
                      Premium Members get an additional 10% off AND collect
                      stamps to save with Rewards. 10 stamps = $5 reward
                    </span>
                  </div>
                  <div className="text-center mb-5  ">
                    <button
                      className="btn btn-primary mt-3"
                      onClick={() => handleBuySingle(singleBook)}
                    >
                      Add to Card
                    </button>
                  </div>
                  {/* Modal */}
                  <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Enter Card Information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {/* Form inputs for card information */}
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Joe"
                        />
                      </div>
                      <div className="form-group">
                        <label>Surname</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Doe"
                        />
                      </div>
                      <div className="form-group">
                        <label>Card Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="XXXX XXXX XXXX XXXX"
                        />
                      </div>
                      <div className="form-group">
                        <label>CVV</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="XXX"
                        />
                      </div>

                      {/* Add more inputs as needed */}
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Submit
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3>Overview</h3>
            <div className="border">
              <h6>Notes From Your Bookseller</h6>
              <div className="d-flex gap-5 ">{singleBook?.overview}</div>
            </div>
          </div>
        </div>
      ) : (
        <div>No book found with ID: {id}</div>
      )}
    </div>
  );
};

export default SearchedBook;
