import { Popup } from 'leaflet'
import React from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

interface MapTypes {
    lat: number,
    lng: number,
    zoom?: number
}

const Map: React.FunctionComponent<MapTypes> = ({ lat, lng, zoom = 8 }) => {
    if (typeof window !== "undefined")
        return (
            <MapContainer center={[lat, lng]} zoom={zoom} scrollWheelZoom={false} style={{ width: '100%', height: "200px" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat, lng]}>
                    {/* <Popup >Popup is here</Popup> */}
                </Marker>
            </MapContainer>
        )
}

export default Map