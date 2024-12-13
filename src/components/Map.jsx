import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
    

 return (
       <div className="map w-full max-w-[1170px] mx-auto h-[500px] mb-[5rem] select-none relative">
              <MapContainer center={[19.6967, 72.7699]} zoom={10} style={{
               width: "100%",
               height: "100%",

       }}> 
       <TileLayer
        url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />

      {/* Overlay for Labels */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        opacity={0.5} // Adjust transparency to blend with satellite view
      />
        <Marker position={[19.6967, 72.7699]}>
            <Popup>Uma Homeopathic</Popup>
        </Marker>
       </MapContainer>

       </div>
  )
}

export default Map
