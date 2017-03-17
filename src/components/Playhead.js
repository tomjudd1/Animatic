import React, { PropTypes } from 'react'

const Playhead = ({ onClick, timecode}) => (
  <div
    onClick={onClick} className="playhead"
    style={{
      //opacity: added ? '1' : '0.5',
      left: timecode * window.innerWidth + "px",
      //transform: 'translate(0px,0px)' 
    }}
  >
  </div>
)

Playhead.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Playhead
