
import React, {useState} from 'react'
import '../css/Spin.css'

export default function Spin() {

  const [bearing, setBearing] = useState("SPIN")


  const lat = 33.7
  const long = -117.8
  const distance = 100
  const destination = convertToPosition(lat, long, bearing, distance)
  console.log("destination: ", destination)
  return (
    <div className="Spin" onClick={() => setBearing( generateBearing() )}>
      Spin Container
      <div className="bearing">
        {bearing}
        <div>
          Lat: {destination.lat}
        </div>
       <div>
          Long: {destination.long}
       </div>
      </div>
    </div>
  )
}

function generateBearing() {
  const compassSectors = {
    north: true,
    northEast: true,
    east: true,
    southEast: true,
    south: true,
    southWest: true,
    west: true,
    northWest: true
  }
  console.log('compassSectors: ', compassSectors)
  return Math.floor(Math.random() * 360)
}

function convertToPosition (lat1, lon1, bearing, distance) {
  let radius = 3958.761;
  lat1 *= Math.PI / 180;
  lon1 *= Math.PI / 180;
  let lat3 = Math.asin(Math.sin(lat1) * Math.cos(distance / radius)
    + Math.cos(lat1) * Math.sin(distance / radius) * Math.cos(bearing * Math.PI / 180));
  let lon3 = lon1 + Math.atan2(Math.sin(bearing * Math.PI / 180) * Math.sin(distance / radius)
    * Math.cos(lat1), Math.cos(distance/ radius) - Math.sin(lat1) * Math.sin(lat3));
  return {
    'lat': lat3 * 180 / Math.PI,
    'long': lon3 * 180 / Math.PI
  };
}
