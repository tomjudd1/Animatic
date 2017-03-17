import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import './index.css';
import reducer from './reducers'

import * as actions from './actions'




const store = createStore(reducer)

store.dispatch(actions.addMarker(1,"Storyboarding can be fiddly", "../images/frame-3.jpg", 0))
store.dispatch(actions.addMarker(2,"Boords makes storyboardin", "../images/frame-7.jpg", 0.5))
//store.dispatch(actions.addMarker(3,"Work with your team", "../images/frame-8.jpg", 0.7))


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
