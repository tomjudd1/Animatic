import React, { Component } from 'react';
import './App.css';
import Playback from'./Comps/Playback.js';
import NextFrame from'./Comps/NextFrame.js';
import Timeline from'./Comps/Timeline.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentTime:0,
      playheadPos:0,
      duration: 3000,
      tickInterval: 100,
      frameData: 
         [
            {
               "id":1,
               "note1":"Storyboarding can be fiddly",
               "img":"../images/frame-3.jpg"
            },
        
            {
               "id":2,
               "note1":"Boords makes storyboarding simple",
               "img":"../images/frame-7.jpg"
            },
        
            {
               "id":3,
               "note1":"Work with your team",
               "img":"../images/frame-8.jpg"
            },

            {
               "id":4,
               "note1":"Drop images into a storyboard",
               "img":"../images/frame-10.jpg"
            },

            {
               "id":5,
               "note1":"Drop images into a storyboard",
               "img":"../images/frame-11.jpg"
            },

            {
               "id":6,
               "note1":"Drop images into a storyboard",
               "img":"../images/frame-15.jpg"
            },


            {
               "id":7,
               "note1":"Drop images into a storyboard",
               "img":"../images/frame-20.jpg"
            },

            {
               "id":8,
               "note1":"Drop images into a storyboard",
               "img":"../images/frame-24.jpg"
            },

            {
               "id":9,
               "note1":"Drop images into a storyboard",
               "img":"../images/frame-26.jpg"
            },         

         ],
      currentFrame: 1,
      nextFrame:2
    };
  }



  componentDidMount() {

    this.setState({
      currentFrame: this.state.frameData[0].img
    });

    this.timerID = setInterval(
      () => this.tick(),
      this.state.tickInterval
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // Work out current frame
    var interval = this.state.duration / this.state.frameData.length;
    var frameId = Math.floor((this.state.currentTime) / interval);
    if(this.state.currentTime >= this.state.duration){
      clearInterval(this.timerID);
    }else{
      this.setState({
        currentTime: this.state.currentTime + this.state.tickInterval,
        currentFrame: this.state.frameData[frameId].img,
        playheadPos: (this.state.currentTime / this.state.duration) * 100
      });
      // Set next frame if not last frame
      if(this.state.currentFrame < this.state.frameData.length){
        this.setState({
          nextFrame: this.state.frameData[frameId+1].img,
        });
      }

    }


  }

  render() {
    return (
      <div className="App">

        <p className="App-intro">
          BOORDS ANIMATIC TOOL - {this.state.currentFrame}
        </p>

        <Playback currentTime={this.state.currentTime} currentFrame={this.state.currentFrame} />
        <NextFrame nextFrame={this.state.nextFrame} />
        <Timeline data={this.state.frameData} playheadPos={this.state.playheadPos} />


      </ div>
    );
  }
}

export default App;
