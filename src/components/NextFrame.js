import React, { Component } from 'react';

class NextFrame extends Component {
  
  constructor() {
    super();
    this.state = {

    };
  }

  render() {

    return (

      <div className="next-frame"> 
        <div className="frame" style={{ backgroundImage: "url(" + this.props.nextFrame  + ")" }}>       
        </div>      
      </div>
    );
  }
}

export default NextFrame;
