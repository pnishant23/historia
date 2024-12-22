
import dynamic from 'next/dynamic'

const Map = dynamic(() => import("@/components/map"))

const ZoomHandler = ({ onZoomChange }) => {
    // Hook to listen for map events
    useMapEvent("zoomend", () => {
      const map = window.L.DomUtil.get("map")._leaflet_map;
      const center = map.getCenter(); // Get the center of the map
      const zoom = map.getZoom(); // Get the zoom level
  
      onZoomChange(center, zoom); // Call the callback with the center and zoom level
    });
  
    return null;
  };

const MapTest = () => {
    return (
       <div className='h-[100vh]'>
         <Map lat={19.0760} lng={72.8777} />
       </div>

    )
}

export default MapTest