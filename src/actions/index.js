let nextMarkerID = 0

export const addMarker = (text, img, timeCodeDP) => ({
  type: 'ADD_MARKER',
  id: nextMarkerID++,
  text: text,
  img: img,
  added: true,
  timeCodeDP: timeCodeDP
})

export const updateMarker = (id) => ({
  type: 'UPDATE_MARKER',
  id,

})

export const updateMarkerTimecodeDP = (id, timeCodeDP) => ({
  type: 'UPDATE_MARKER_TIMECODEDP',
  timeCodeDP: timeCodeDP,
  id
})