import React from 'react'
import { connect } from 'react-redux'
import { addMarker } from '../actions'

let AddMarker = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addMarker(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Marker
        </button>
      </form>
    </div>
  )
}
AddMarker = connect()(AddMarker)

export default AddMarker
