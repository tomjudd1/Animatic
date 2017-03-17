const sound = (state, action) => {
  switch (action.type) {
    case 'ADD_SOUND':
      return {
        id: action.id,
        duration: action.duration,
        file: action.file,
        playing: action.playing
      }
    
    default:
      return state
  }
}

const sounds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SOUND':
      return [
        ...state,
        sound(undefined, action)
      ]

    default:
      return state
  }
}

export default sounds
