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
               "img":"../images/frame-3.jpg",
               "timecodeDP":0
            },
        
            {
               "id":2,
               "note1":"Boords makes storyboarding simple",
               "img":"../images/frame-7.jpg",
               "timecodeDP":0.4
            },
        
            {
               "id":3,
               "note1":"Work with your team",
               "img":"../images/frame-8.jpg",
               "timecodeDP":0.5
            },

            {
               "id":4,
               "note1":"Work with your team",
               "img":"../images/frame-10.jpg",
               "timecodeDP":0.7
            }       
         ],
      currentFrameImg: 1,
      currentFrameID:0,
      nextFrame:2
    };
  }

  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', event);
    console.log('Data: ', data);
  };

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
    var playheadPosDP = this.state.currentTime / this.state.duration



    if(this.state.currentTime >= this.state.duration){
      clearInterval(this.timerID);
    }else{

      // Check nearest frame to playhead
      if(this.state.currentFrameID < this.state.frameData.length-1 ){
        if(playheadPosDP > this.state.frameData[this.state.currentFrameID+1].timecodeDP){
          this.setState({
            currentFrameID: this.state.currentFrameID + 1
          });
        }
      }

      this.setState({
        currentTime: this.state.currentTime + this.state.tickInterval,
        currentFrame: this.state.frameData[this.state.currentFrameID].img,
        playheadPos: playheadPosDP * 100
      });

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
