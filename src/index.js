import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import animaticApp from './reducers'

import { updateMarker, updateMarkerTimecodeDP, addMarker } from './actions'

const store = createStore(animaticApp)


// TESTING -----------------------------------------------------------------

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
//store.dispatch(updateMarker(0))
store.dispatch(addMarker("Storyboarding can be fiddly", "../images/frame-3.jpg", 0))
store.dispatch(addMarker("Boords makes storyboarding simple", "../images/frame-7.jpg", 0.4))
store.dispatch(addMarker("Work with your team", "../images/frame-8.jpg", 0.6))


//store.dispatch(updateMarker(1))
//store.dispatch(updateMarkerTimecodeDP(1,0.3))


// Stop listening to state updates
//unsubscribe()

// -------------------------------------------------------------------------

ReactDOM.render(
	<Provider store={store}>	
  		<App />
	</Provider>,
	document.getElementById('root')
);
