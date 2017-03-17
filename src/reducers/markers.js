const marker = (state, action) => {
  switch (action.type) {
    case 'ADD_MARKER':
      return {
        id: action.id,
        number: action.number,
        text: action.text,
        img: action.img,
        timecode: action.timecode,
        added: false
      }
    case 'TOGGLE_MARKER':
      if (state.id !== action.id) {
        added: false
        return state
      }

      return {
        ...state,
        added: true
      }
    default:
      return state
  }
}

const markers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MARKER':
      return [
        ...state,
        marker(undefined, action)
      ]
    case 'TOGGLE_MARKER':
      return state.map(t =>
        marker(t, action)
      )
    default:
      return state
  }
}

export default markers
