import React, { Component } from 'react';
import Marker from'../components/Marker.js';
//import SoundPlayer from'../Comps/SoundPlayer.js';


class Timeline extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      markers: Array(9).fill(null),
      data: this.props.data,
      frameCount: this.props.data.length,
      playheadPos: 70

    };

  }

  renderSquare(i, img) {

    // var xPos = 100/(this.state.frameCount) * (i-1);
    var xPos = 100 * this.state.data[i].timecodeDP; 

    return <Marker  value={this.state.data[i].id} 
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

        

        {this.state.data.map((frame, i) => this.renderSquare(i, frame.img ) ) }
        
        <div className="play-head" style={{left: this.props.playheadPos + '%'}}>
        </div> 

      </div>
    );
  }
}

export default Timeline;
