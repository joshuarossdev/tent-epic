
import React from 'react'
import '../css/Spin.css'

export default function Spin( props ) {

  return (
    <div className="Spin" onClick={ props.setBearing }>
      Spin Container
      <div className="bearing">
        {props.bearing}
        <div>
          Lat: {props.destination.lat}
        </div>
       <div>
          Long: {props.destination.long}
       </div>
      </div>
    </div>
  )
}
