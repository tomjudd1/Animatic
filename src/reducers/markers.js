const marker = (state, action) => {
  switch (action.type) {
    case 'ADD_MARKER':
      return {
        id: action.id,
        text: action.text,
        img: action.img,
        added: true,
        timeCodeDP: action.timeCodeDP
      }
    case 'UPDATE_MARKER':
      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        added: !state.added
      }
    case 'UPDATE_MARKER_TIMECODEDP':
      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        timeCodeDP: action.timeCodeDP
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
    case 'UPDATE_MARKER':
      return state.map(t =>
        marker(t, action)
      )
    case 'UPDATE_MARKER_TIMECODEDP':
      return state.map(t =>
        marker(t, action)
      )
    default:
      return state
  }
}


export default markers
