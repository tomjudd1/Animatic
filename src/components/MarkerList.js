import React, { PropTypes } from 'react'
import Marker from './Marker.js'
import Draggable from 'react-draggable';



const MarkerList = ({ markers, onMarkerClick, onMarkerMoved }) => (


  <div className="marker-list">
    
    {markers.map(marker=>
      
      <Draggable
        key={marker.id}
        axis="x"
        handle=".marker"
        bounds={{left: 0, right: window.innerWidth-20}}
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[2, 5]}
        zIndex={100}
        onStart={MarkerList.handleStart}
        //onDrag={MarkerList.handleDrag}
        onDrag={(e, position) => onMarkerMoved(marker.id, position.x, window.innerWidth)}
        >
      
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

MarkerList.eventLogger=(e: MouseEvent, data: Object) => {
    console.log('Event: ', event);
    console.log('Data: ', data);
}



  


export default MarkerList
