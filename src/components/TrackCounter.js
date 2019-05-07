import React from 'react'

const TrackCounter = (props) => {

  return (
    <p>
      <span className="fas fa-music">&nbsp;</span>
      <span className="counter">{props.tracksAmount}</span> tracks matching '{props.artistName}' from iTunes
    </p>
  )

}

export default TrackCounter