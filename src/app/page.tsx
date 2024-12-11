
'use client'
import { useEffect, useRef, useState } from 'react'

import axios from 'axios'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

export default function Page() {
  const [data, setData] = useState<any>()
  const [center, setCenter] = useState({ lat: -4.043477, lng: 39.668205 })
  const ZOOM_LEVEL = 9
  const mapRef = useRef()
  useEffect(() => {
    axios.get('/api/v1/locations')
      .then(res => setData(res))
  }, [])
  return (
    <div className='p-4 flex flex-col gap-y-4'>
      <div className='w-[1000px] m-auto flex justify-evenly items-center bg-red-300'>
        <div className=''>Mumbai</div>
        <div>Dubai</div>
      </div>
      <div className='grid grid-cols-2 gap-2 h-[500px]'>
        <div className='bg-yellow-100 h-full'>
          <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

            <Marker
              position={[19.0760, 72.8777]}
            ></Marker>
          </MapContainer>
        </div>
        <div className='bg-green-100 h-full'>
          <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

            <Marker
              position={[28.7041, 77.1025]}
            ></Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  )
}
