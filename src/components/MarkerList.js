import React, { PropTypes } from 'react'
import Marker from './Marker.js'
import Draggable from 'react-draggable';



const MarkerList = ({ markers, onMarkerClick }) => (

  <div className="marker-list">
    
    {markers.map(marker =>
      
      <Draggable
        axis="x"
        handle=".marker"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        zIndex={100}
        onStart={MarkerList.handleStart}
        onDrag={MarkerList.handleDrag}
        onStop={MarkerList.handleStop}>
      
        <div>  

          <Marker
            key={marker.id}
            {...marker}
            onClick={() => onMarkerClick(marker.id)}
          />

        </div>

      </Draggable>



    )}
  </div>

)

MarkerList.propTypes = {
  markers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    added: PropTypes.bool.isRequired,
    number: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    timecode: PropTypes.number.isRequired
  }).isRequired).isRequired,
  onMarkerClick: PropTypes.func.isRequired
}


MarkerList.eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', event);
    console.log('Data: ', data);
}

export default MarkerList
