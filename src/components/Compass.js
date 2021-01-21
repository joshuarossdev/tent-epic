import '../css/Compass.css'
import Spin from './Spin'
import React, { useState } from 'react'

export default function Compass() {
  const [bearing, setBearing] = useState("SPIN")
  const lat = 33.7
  const long = -117.8
  const distance = 100
  const destination = convertToPosition(lat, long, bearing, distance)
  return (
    <>
      <div className="Compass-container">
        Compass Container
        <div className="Compass">
          Compass
          <Spin
            setBearing={ () => setBearing( generateBearing() )}
            bearing={bearing}
            destination={destination}
          />
        </div>
      </div>
    </>
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

function convertToPosition(lat1, lon1, bearing, distance) {
  let radius = 3958.761;
  lat1 *= Math.PI / 180;
  lon1 *= Math.PI / 180;
  let lat3 = Math.asin(Math.sin(lat1) * Math.cos(distance / radius)
    + Math.cos(lat1) * Math.sin(distance / radius) * Math.cos(bearing * Math.PI / 180));
  let lon3 = lon1 + Math.atan2(Math.sin(bearing * Math.PI / 180) * Math.sin(distance / radius)
    * Math.cos(lat1), Math.cos(distance / radius) - Math.sin(lat1) * Math.sin(lat3));
  return {
    'lat': lat3 * 180 / Math.PI,
    'long': lon3 * 180 / Math.PI
  };
}
