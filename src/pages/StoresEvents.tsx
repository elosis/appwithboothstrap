import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 41.0245, // Latitude for Üsküdar, Istanbul
  lng: 29.0176, // Longitude for Üsküdar, Istanbul
};

const StoresEvents = () => {
  return (
    <div>
      <div>
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap mapContainerStyle={containerStyle} center={center}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default StoresEvents;
