import React from 'react'

const TrackCounter = (props) => {
    
  return (
    <p>
      <span className="fas fa-music">&nbsp;</span>
      <span className="counter">{props.tracksAmount} tracks</span> from iTunes
    </p>
  )

}

export default TrackCounter