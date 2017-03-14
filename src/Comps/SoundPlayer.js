import React, { Component } from 'react';
import sound from '../sound/short.wav';

var Sound = require('react-sound');
var playHeadPosition = '0%';

class SoundPlayer extends Component {


	handleSongPlaying(e) {
		playHeadPosition = e.position / e.duration * 100 +'%';
		console.log(playHeadPosition);
	}

	function

	handleSongFinishedPlaying() {

		console.log("FILE FINSHED PLAYING");

	}

	handlePlayPause(){

		console.log("playPause Pressed");

	}


	render() {

		return ( 
			<div className="Play-Bar">
				<Sound
				    url={sound}
				    playStatus={Sound.status.PLAYING}
				    playFromPosition={0 /* in milliseconds */}
				    onLoading={this.handleSongLoading}
				    onPlaying={this.handleSongPlaying}
				    onFinishedPlaying={this.handleSongFinishedPlaying}
			    />
        	</div>
		);	
	}
}

export default SoundPlayer;
