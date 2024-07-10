import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 41.0245,
  lng: 29.0176,
};

const StoresEvents = () => {
  return (
    <div>
      <Navbar />
      <div className="container text-center mt-5 d-flex flex-column gap-4">
        <div className="row">
          <div className="col-12 col-xl-8 search-stores-events">
            <div className="d-flex flex-column">
              <h2>Search Stores and Events</h2>
              <p>
                <strong>SEARCH LOCATION :</strong> Istanbul
              </p>
              <img
                src="https://cbsakademi.ibb.gov.tr/uploads/2016/11/infowindow.png"
                className="w-100"
                style={{ maxWidth: "800px", height: "auto" }}
                alt="location"
              />
              <h4 className="mt-5">0 Upcoming Events Near Istanbul</h4>
              <div className="mt-5">
                <div className="row gap-5">
                  <div className="col-12 col-md-4">
                    <p>AVAILABILITY</p>
                    <div className="d-flex flex-wrap gap-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault1"
                        >
                          Today
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault2"
                        >
                          This Week
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault3"
                        >
                          January
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault4"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault4"
                        >
                          February
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault5"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault5"
                        >
                          March
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault6"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault6"
                        >
                          April
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault7"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault7"
                        >
                          May
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault8"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault8"
                        >
                          June
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <p>EVENT TYPE</p>
                    <div className="d-flex flex-wrap gap-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault9"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault9"
                        >
                          Author Event
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault10"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault10"
                        >
                          Children's Event
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault11"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault11"
                        >
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <p>LOCATION TYPE</p>
                    <div className="d-flex flex-wrap gap-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault12"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault12"
                        >
                          Virtual Event
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault13"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault13"
                        >
                          In-Store
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4 featured-events">
            <h2 className="h2">Featured Events</h2>
            <div className="mt-3">
              <div className="card mb-3 p-2" style={{ maxWidth: "440px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://prodimage.images-bn.com/cimages/0000016426874"
                      className="img-fluid rounded w-75"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body footer-list">
                      <h5
                        className="card-title"
                        style={{ color: "#8d7130", fontSize: "16px" }}
                      >
                        VIRTUAL
                      </h5>
                      <span className="card-text">
                        TUESDAY, FEBRUARY 06, 2024 3:00 PM ET
                        <br />
                      </span>
                      <span className="card-text">
                        <strong>
                          Amy Jo Burns discusses MERCURY, our #bsbookclub
                          January Book Club Selection!
                          <br />
                        </strong>
                      </span>
                      <em className="card-text font-italic">
                        Author Event, Special Event
                      </em>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3 p-2" style={{ maxWidth: "440px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://prodimage.images-bn.com/cimages/0000022984463"
                      className="img-fluid rounded w-75"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body footer-list">
                      <h5
                        className="card-title"
                        style={{ color: "#8d7130", fontSize: "16px" }}
                      >
                        VIRTUAL
                      </h5>
                      <span className="card-text">
                        TUESDAY, FEBRUARY 06, 2024 7:00 PM ET
                        <br />
                      </span>
                      <span className="card-text">
                        <strong>
                          Ali Hazelwood celebrates BRIDE with Xio Axelrod and
                          Nisha J. Tuli
                          <br />
                        </strong>
                      </span>
                      <em className="card-text font-italic">
                        Author Event, Special Event
                      </em>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3 p-2" style={{ maxWidth: "440px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://prodimage.images-bn.com/cimages/0000004442143"
                      className="img-fluid rounded w-75"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body footer-list">
                      <h5
                        className="card-title"
                        style={{ color: "#8d7130", fontSize: "16px" }}
                      >
                        VIRTUAL
                      </h5>
                      <span className="card-text">
                        WEDNESDAY, FEBRUARY 07, 2024 3:00 PM ET
                        <br />
                      </span>
                      <span className="card-text">
                        <strong>
                          Jordan Harper celebrates EVERYBODY KNOWS
                          #BNMiddayMystery
                          <br />
                        </strong>
                      </span>
                      <em className="card-text font-italic">
                        Author Event, Special Event
                      </em>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3 p-2" style={{ maxWidth: "440px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://prodimage.images-bn.com/cimages/0000002585868"
                      className="img-fluid rounded w-75"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body footer-list">
                      <h5
                        className="card-title"
                        style={{ color: "#8d7130", fontSize: "16px" }}
                      >
                        VIRTUAL
                      </h5>
                      <span className="card-text">
                        THURSDAY, FEBRUARY 15, 2024 7:00 PM ET
                        <br />
                      </span>
                      <span className="card-text">
                        <strong>
                          Christopher Paolini and Rebecca Yarros discuss their
                          newest releases, MURTAGH and IRON FLAME!
                          <br />
                        </strong>
                      </span>
                      <em className="card-text font-italic">
                        Author Event, Special Event
                      </em>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3 p-2" style={{ maxWidth: "440px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://prodimage.images-bn.com/cimages/0000019424550"
                      className="img-fluid rounded w-75"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body footer-list">
                      <h5
                        className="card-title"
                        style={{ color: "#8d7130", fontSize: "16px" }}
                      >
                        VIRTUAL
                      </h5>
                      <span className="card-text">
                        TUESDAY, MARCH 05, 2024 3:00 PM ET
                        <br />
                      </span>
                      <span className="card-text">
                        <strong>
                          Dolly Alderton discusses GOOD MATERIAL, our
                          #bnbookclub February Book Club Selection!
                          <br />
                        </strong>
                      </span>
                      <em className="card-text font-italic">
                        Author Event, Special Event
                      </em>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoresEvents;
