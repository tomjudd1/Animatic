import { combineReducers } from 'redux'
import markers from './markers'
import visibilityFilter from './visibilityFilter'
import sound from './sounds'


const animaticApp = combineReducers({
  markers,
  visibilityFilter,
  sound
})

export default animaticApp
