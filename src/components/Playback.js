import React, { Component } from 'react';


class Playback extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (

      <div className="playback">  
        <div className="player" style={{ backgroundImage: "url(" + this.props.currentFrame  + ")" }}>       
        </div>     
      </div>
    );
  }
}

export default Playback;
