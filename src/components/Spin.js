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

  return (
    <div className="Spin">
      Spin
      <div className="bearing">
        {randomBearing(compassSectors)}
      </div>
    </div>
  )
}

function randomBearing(compassSectors) {
  console.log('compassSectors: ', compassSectors)
  return Math.floor(Math.random() * 360)
}
