// 'use client'
// import type { LatLngTuple, LatLngExpression } from 'leaflet';
// import { Popup } from 'leaflet'
// import 'leaflet/dist/leaflet.css';
// import React, { useState } from 'react'
// import { MapContainer, Marker, Polyline, TileLayer, useMapEvent } from 'react-leaflet'
// // import markerIconPng from "leaflet/dist/images/marker-icon.png"
// import { Icon } from 'leaflet'
// import markerIcon from "../assets/marker-svgrepo-com.svg"

// interface MapTypes {
//     lat: number,
//     lng: number,
//     zoom?: number
// }

// const polyline: LatLngExpression[] = [
//     [51.505, -0.09],
//     [51.51, -0.1],
//     [51.51, -0.12],
// ]

// const limeOptions = { color: 'lime' }

// const ZoomHandler = ({ onZoomChange }) => {
//     // Hook to listen for map events
//     useMapEvent("zoomend", () => {
//         const map = window.L.DomUtil.get("map")._leaflet_map;
//         const center = map.getCenter(); // Get the center of the map
//         const zoom = map.getZoom(); // Get the zoom level

//         onZoomChange(center, zoom); // Call the callback with the center and zoom level
//     });

//     return null;
// };

// const Map: React.FunctionComponent<MapTypes> = ({ lat, lng }) => {
//     const [coords, setCoords] = useState({ lat: 0, lng: 0 });
//     const [zoom, setZoom] = useState(13);
//     const position: LatLngTuple = [lat, lng]

//     const handleZoomChange = (center, zoom) => {
//         setCoords({ lat: center.lat, lng: center.lng });
//         setZoom(zoom);
//     };


//     return (
//         <>
//             <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{ width: '100%', height: "500px" }}>
//                 <TileLayer
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 <Marker position={position} icon={new Icon({ iconUrl: markerIcon, iconSize: [25, 41], iconAnchor: [12, 41] })} />
//                 <Polyline pathOptions={limeOptions} positions={polyline} />
//                 <ZoomHandler onZoomChange={handleZoomChange} />
//             </MapContainer>
//             <div>
//                 <p>Latitude: {coords.lat}</p>
//                 <p>Longitude: {coords.lng}</p>
//                 <p>Zoom Level: {zoom}</p>
//             </div>
//         </>
//     )
// }

// export default Map


'use client'
import type { LatLngTuple, LatLngExpression } from 'leaflet';
import { Popup, Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Polyline, TileLayer, useMapEvent } from 'react-leaflet'
import markerIcon from "../assets/marker-svgrepo-com.svg" // Your custom marker icon

interface MapTypes {
    lat: number,
    lng: number,
    zoom?: number
}

const polyline: LatLngExpression[] = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
]

const limeOptions = { color: 'lime' }

const ZoomHandler = ({ onZoomChange }) => {
    const map = useMapEvent('zoomend', () => {
        const center = map.getCenter();  // Get center
        const zoom = map.getZoom();      // Get zoom level
        onZoomChange(center, zoom);      // Pass them back
    });

    return null;
};

const Map: React.FunctionComponent<MapTypes> = ({ lat, lng, zoom = 13 }) => {
    // Use the provided lat, lng directly for the initial map position
    const [coords, setCoords] = useState({ lat, lng });
    const [currentZoom, setZoom] = useState(zoom);
    const [locationInfo, setLocationInfo] = useState(null);

    const position: LatLngTuple = [coords.lat, coords.lng];

    const handleZoomChange = (center, zoom) => {
        setCoords({ lat: center.lat, lng: center.lng });  // Update coordinates when zooming
        setZoom(zoom);  // Update zoom level
        fetchLocationData(center.lat, center.lng);
    };

    const fetchLocationData = async (lat: number, lng: number) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/v1/locationData/data?lat=${lat}&lng=${lng}`);
            const data = await response.json();
            setLocationInfo(data);  // Store the data received from the backend
            console.log(data)

        } catch (error) {
            console.error("Error fetching location data:", error);
        }
    };

    useEffect(() => {
        fetchLocationData(coords.lat, coords.lng);
    }, [coords.lat, coords.lng]);

    return (
        <>
            <MapContainer center={position} zoom={currentZoom} scrollWheelZoom={false} style={{ width: '100%', height: "500px" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={new Icon({ iconUrl: markerIcon, iconSize: [25, 41], iconAnchor: [12, 41] })} />
                <Polyline pathOptions={limeOptions} positions={polyline} />
                <ZoomHandler onZoomChange={handleZoomChange} />
            </MapContainer>
            <div>
                <p>Latitude: {coords.lat}</p>
                <p>Longitude: {coords.lng}</p>
                <p>Zoom Level: {currentZoom}</p>
            </div>
        </>
    )
}

export default Map;
