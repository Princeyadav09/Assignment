import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from './Assets/icons8-map-marker-48.png'
import L from 'leaflet'; // Import Leaflet

const App = () => {
  const [pharmacies, setPharmacies] = useState([
    { id: 1, name: 'Pharmacy A', latitude: 51.505, longitude: -0.09 },
    { id: 2, name: 'Pharmacy B', latitude: 51.51, longitude: -0.1 },
    { id: 3, name: 'Pharmacy C', latitude: 51.512, longitude: -0.08 },
    { id: 3, name: 'Pharmacy D', latitude: 51.52, longitude: -0.08 },
    { id: 3, name: 'Pharmacy E', latitude: 51.524, longitude: -0.08 },
    // Add more mock pharmacy data here
  ]);

  return (
    <>
    <h1>Nearby Pharmacy of London... Coordinates[51.505, -0.09]</h1>
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '700px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {pharmacies.map((pharmacy) => (
        <Marker
          key={pharmacy.id}
          position={[pharmacy.latitude, pharmacy.longitude]}
          icon={L.icon({
            iconUrl: markerIcon,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
          })}
        >
          <Popup>
            <div>
              <h3>{pharmacy.name}</h3>
              <p>Latitude: {pharmacy.latitude}</p>
              <p>Longitude: {pharmacy.longitude}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </>
  );
};

export default App;
