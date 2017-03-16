import React, { Component } from 'react';
import logo from '../SVG/logo.svg';


class Logo extends Component {
  render() {
    return (
    	<img src={logo} className="App-logo" alt="logo" />
    );
  }
}

export default Logo;
