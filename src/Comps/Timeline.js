import React, { Component } from 'react';
import Marker from'../Comps/Marker.js';
import SoundPlayer from'../Comps/SoundPlayer.js';


class Timeline extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      frameCount: this.props.data.length,
      currentTime: 0,
      playheadPos: 70

    };

  }

  renderSquare(i, img) {

    var xPos = 100/(this.state.frameCount) * (i-1);

    return <Marker value={i} key={i} position={xPos} img={img} onClick={() => this.handleClick(i)} />;
  }

  handleClick(i) {
    const markers = this.state.markers.slice();
    markers[i] = 'X';
    this.setState({
        markers: markers,
        xIsNext: !this.state.xIsNext,
    });
  }

  render() {

    return (

      <div className="timeline"> 

        <SoundPlayer />


        
        {this.state.data.map((frame, i) => this.renderSquare(frame.id, frame.img ) ) }
        
        <div className="play-head" style={{left: this.props.playheadPos + '%'}}>
        </div> 

      </div>
    );
  }
}

export default Timeline;
