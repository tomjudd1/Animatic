import React, { Component } from 'react';

// REDUX --- 
import { connect } from 'react-redux';
import * as actions from '../actions';

let createHandlers = function(dispatch) {
  let onClick = function(node, data) {
    dispatch(actions.updateMarkerTimecodeDP(0));
    console.log(data);
  };

  return {
    onClick,
    // other handlers
  };
}

// end REDUX --- 

class Marker extends Component {

	constructor(props) {
	    super(props);
	 	this.handlers = createHandlers(this.props.dispatch); // REDUX ------------------------------------------
	    this.state = {
	      	markerPos: props.position,
	      	frameImage: { backgroundImage: "url(" +  props.img  + ")" }  
  		};

  	}	

  	render(){
  		return (

		  			<div className="frame" style={{left: this.state.markerPos + '%'}} onClick={() => this.handlers.onClick()} >
		  				<div className="frame-image" style={ this.state.frameImage }> 
					  	</div>
						<div className="marker" >
					  		{this.props.value}
					  	</div>
					</div>
				


    	);
  	}

}

export default connect()(Marker);
