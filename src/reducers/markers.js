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
        return state
      }
      return {
        ...state,
        added: true
      }
    case 'UPDATE_MARKER':
      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        timecode: action.posX / action.width
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
    case 'UPDATE_MARKER':
      return state.map(t =>
        marker(t, action)
      )

    default:
      return state
  }
}

export default markers
