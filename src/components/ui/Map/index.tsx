'use client'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { icon } from "leaflet"
import "leaflet/dist/leaflet.css"

const Map = () => {

const ICON = icon({
  iconUrl: "/pin.svg",
  iconSize: [64, 64],
})
  return (
    <MapContainer className="map" center={[51.505, -0.09]} zoom={18} style={{height: '100%', width: '100%'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <Marker icon={ICON} position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        
      </MapContainer>
  )
}

export default Map;