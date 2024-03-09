import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
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
      <div className="mt-5 d-flex gap-4 justify-content-center">
        <div className="d-flex flex-column">
          <h2>Search Stores and Events</h2>
          <p>
            <strong>SEARCH LOCATION :</strong> Istanbul
          </p>
          <div style={{ width: "900px", maxWidth: "900px" }}>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
          <h4 className="mt-5">0 Upcoming Events Near Istanbul</h4>
          <div className="mt-5 d-flex flex-row gap-5">
            <div>
              <p>AVAILABILITY</p>
              <div className="d-flex gap-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Today
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    This Week
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    January
                  </label>
                </div>
              </div>
              <div className="d-flex gap-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    February
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    March
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    April
                  </label>
                </div>
              </div>
              <div className="d-flex gap-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    May
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    June
                  </label>
                </div>
              </div>
            </div>
            <div>
              <p>EVENT TYPE</p>
              <div className="d-flex gap-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Author Event
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Children's Event
                  </label>
                </div>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Other
                </label>
              </div>
            </div>
            <div>
              <p>LOCATION TYPE</p>
              <div className="d-flex gap-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Virtual Event
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    In-Store
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
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
                        Amy Jo Burns discusses MERCURY, our #bsbookclub January
                        Book Club Selection!
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
                        Dolly Alderton discusses GOOD MATERIAL, our #bnbookclub
                        February Book Club Selection!
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
  );
};

export default StoresEvents;
