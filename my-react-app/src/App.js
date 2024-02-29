// App.js
import React from 'react';
import './App.css'; // Assume you have CSS file for styling
import { GoogleMap, LoadScript } from '@react-google-maps/api'; // Import necessary components from react-google-maps

function App() {
  // Google Maps API key
  const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';

  // Options for Google Maps
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  // Center of the map
  const center = {
    lat: 40.7128, // Example latitude
    lng: -74.0060 // Example longitude
  };

  return (
    <div className="App">
      <h1>Welcome to Our Amazing Gym!</h1>
      <div className="map-container">
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={10}
            center={center}
          >
            {/* Add any additional components or overlays here */}
          </GoogleMap>
        </LoadScript>
      </div>
      {/* Add any additional content below the map */}
    </div>
  );
}

export default App;
