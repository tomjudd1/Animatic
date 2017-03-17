import React, { PropTypes } from 'react'

const Marker = ({ onClick, added, number, text, img, timecode  }) => (
  <div
    onClick={onClick} className="marker"
    style={{
      opacity: added ? '1' : '0.5',
      left: timecode * 100 + "%"
    }}
  >
    <span className="noselect">{number}</span>
  </div>
)

Marker.propTypes = {
  onClick: PropTypes.func.isRequired,
  added: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Marker
