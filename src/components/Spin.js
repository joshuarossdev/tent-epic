import '../css/Spin.css'
import React from 'react'

export default function Spin() {
  let compassSectors = {
    north: true,
    northEast: true,
    east: true,
    southEast: true,
    south: true,
    southWest: true,
    west: true,
    northWest: true
  }
  let lat = 33.7
  let long = 117.8
  let distance = 100
  let bearing = generateBearing(compassSectors)
  let destination = convertToPosition(lat, long, bearing, distance)
  console.log("destination: ", destination)
  return (
    <div className="Spin">
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

function generateBearing(compassSectors) {
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
