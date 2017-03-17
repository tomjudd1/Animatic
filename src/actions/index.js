let nextMarkerId = 0
let nextMarkerNumber = 1

export const addMarker = (number,text,img,timecode) => ({
  type: 'ADD_MARKER',
  id: nextMarkerId++,
  number: nextMarkerNumber++,
  text: text,
  img: img,
  timecode: timecode
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleMarker = (id) => ({
  type: 'TOGGLE_MARKER',
  id
})
