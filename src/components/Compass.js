import '../css/Compass.css'
import Spin from './Spin'
import React from 'react'

export default function Compass() {
  return (
    <>
      <div className="Compass-container">
        Compass Container
        <div className="Compass">
          Compass
          <Spin/>
        </div>
      </div>
    </>
  )
}
