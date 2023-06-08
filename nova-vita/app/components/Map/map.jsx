'use client'
import { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import MarkerIcon from '../../../node_modules/leaflet/dist/images/marker-icon.png'
import 'leaflet/dist/leaflet.css'
import MapEvents from './events'

function Map() {
    const [markerPosition, setMarkerPosition] = useState(null);

    const handleClick = (e) => {
        const { lat, lng } = e.latlng;
        setMarkerPosition([lat,lng])
        console.log(`Latitud: ${lat}, Longitud: ${lng}`);
      };

    return(
        <div className="mt-4 map-container">
            <MapContainer className="map" center={[-17.387635, -66.155820]} zoom={15} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapEvents onClick={handleClick}/>
                {markerPosition && (<Marker position={markerPosition} icon={
                    new L.Icon({
                        iconUrl: MarkerIcon.src,
                        iconRetinaUrl: MarkerIcon.src,
                        iconSize: [15, 25],
                        iconAnchor: [0.5, 25],
                    })
                } />)}
            </MapContainer>
        </div>
    );
}

export default Map;