import * as actions from './index'

describe('marker actions', () => {

  it('addMarker should create ADD_MARKER action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: 'ADD_MARKER',
      id: 0,
      text: 'Default marker'
    })
  })

  it('updateMarker should create UPDATE_MARKER action', () => {
    expect(actions.updateMarker('Use Redux')).toEqual({
      type: 'UPDATE_MARKER',
      text: 'Use Redux'
    })
  })
})
