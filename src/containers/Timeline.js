import { connect } from 'react-redux'
import { toggleMarker } from '../actions'
import MarkerList from '../components/MarkerList'

const getVisibleMarkers = (markers, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return markers
    case 'SHOW_COMPLETED':
      return markers.filter(t => t.added)
    case 'SHOW_ACTIVE':
      return markers.filter(t => !t.added)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  markers: getVisibleMarkers(state.markers, state.visibilityFilter)
})

const mapDispatchToProps = {
  onMarkerClick: toggleMarker
}

const Timeline = connect(
  mapStateToProps,
  mapDispatchToProps
)(MarkerList)

export default Timeline
