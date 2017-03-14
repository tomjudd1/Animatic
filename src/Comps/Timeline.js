import React, { Component } from 'react';
import Marker from'../Comps/Marker.js';
//import SoundPlayer from'../Comps/SoundPlayer.js';


class Timeline extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      markers: Array(9).fill(null),
      data: this.props.data,
      frameCount: this.props.data.length,
      currentTime: 0,
      playheadPos: 70

    };

  }

  renderSquare(i, img) {

    var xPos = 100/(this.state.frameCount) * (i-1);

    return <Marker  value={i} 
                    key={i} 
                    position={xPos} 
                    img={img} 
                    onMouseDown={() => this.handleDragStart(i)} 
                    onMouseMove={() => this.handleDragging(i)} 
                    onMouseUp={() => this.handleDrop(i)} 
                    />;
  }



  render() {

    return (

      <div className="timeline"> 

        

        {this.state.data.map((frame, i) => this.renderSquare(frame.id, frame.img ) ) }
        
        <div className="play-head" style={{left: this.props.playheadPos + '%'}}>
        </div> 

      </div>
    );
  }
}

export default Timeline;
