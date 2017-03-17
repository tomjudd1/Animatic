import * as actions from './index'

describe('todo actions', () => {
  it('addTodo should create ADD_MARKER action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: 'ADD_MARKER',
      id: 0,
      text: 'Use Redux'
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('toggleTodo should create TOGGLE_MARKER action', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: 'TOGGLE_MARKER',
      id: 1
    })
  })
})
