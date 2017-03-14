import React, { Component } from 'react';

class Marker extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      	markerPos: props.position,
	      	frameImage: { backgroundImage: "url(" +  props.img  + ")" }  
  		};

  	}	

  	render(){
  		return (

		  			<div className="frame" style={{left: this.state.markerPos + '%'}}>
		  				<div className="frame-image" style={ this.state.frameImage }> 
					  	</div>
						<div className="marker" >
					  		{this.props.value}
					  	</div>
					</div>
				


    	);
  	}

}

export default Marker;
