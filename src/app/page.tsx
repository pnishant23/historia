
'use client'
import { useEffect, useRef, useState } from 'react'

import axios from 'axios'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useMap } from 'react-leaflet/hooks'
import "leaflet/dist/leaflet.css";
import Dropdown from '@/components/dropdown';
import { Input } from '@/components/ui/input';
import Map from '@/components/map'

export default function Page() {
  const [data, setData] = useState<any>()
  const [center, setCenter] = useState({ lat: 19.0760, lng: 72.8777 })
  const ZOOM_LEVEL = 1
  const mapRef = useRef()
  useEffect(() => {
    axios.get('/api/v1/locations')
      .then(res => setData(res))
  }, [])
  return (
    <>
      <div className='pl-20 pb-10'>
        <div className='flex gap-4 w-full'>
          <div> <span>Compare by</span> <Dropdown /></div>
          <Input type='text' placeholder='Search location' className='w-1/2' />
        </div>
      </div>
      <div className='flex justify-between items-start w-[90vw] mx-auto gap-x-4'>
        <div className='h-full w-full border rounded-md'>
          <h1>American Revolution</h1>
          <img
            className='h-[200px] mx-auto'
            src="https://images.unsplash.com/photo-1567965606933-c46e07393d91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <p>The American Revolution was an ideological and political movement in the Thirteen Colonies which peaked when colonists initiated an ultimately successful war for independence against the Kingdom of Great Britain. Leaders of the American Revolution were colonial separatist leaders who originally sought more autonomy as British subjects, but later assembled to support the Revolutionary War, which ended British colonial rule over the colonies, establishing their independence as the United States of America in July 1776.</p>
          <Map lat={19.0760} lng={72.8777} />
        </div>
        <div className='h-full w-full border rounded-md'>
          <h1>French Revolution</h1>
          <img
            className='h-[200px] mx-auto'
            src="https://images.unsplash.com/photo-1583355261087-0d6c861a946a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <p>The French Revolution (French: Révolution française [ʁevɔlysjɔ̃ fʁɑ̃sɛːz]) was a period of political and societal change in France that began with the Estates General of 1789, and ended with the coup of 18 Brumaire in November 1799 and the formation of the French Consulate. Many of its ideas are considered fundamental principles of liberal democracy,[1] while its values and institutions remain central to modern French political discourse</p>
          <Map lat={19.0760} lng={72.8777} />
        </div>
      </div>
    </>
    
  )
}
