let nextMarkerId = 0
let nextSoundId = 0
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

export const updateMarker = (id, posX, width) => ({
  type: 'UPDATE_MARKER',
  id,
  posX,
  width
})

// -- SOUND FILE STUFF

export const addSound = (duration,file,playing) => ({
  type: 'ADD_SOUND',
  id: nextSoundId++,
  duration: duration,
  file: file,
  playing: false  
})