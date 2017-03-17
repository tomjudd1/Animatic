import { combineReducers } from 'redux'
import markers from './markers'
import visibilityFilter from './visibilityFilter'

const animaticApp = combineReducers({
  markers,
  visibilityFilter
})

export default animaticApp
