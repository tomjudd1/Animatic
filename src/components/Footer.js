import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      Show All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Show Added
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Show Hidden
    </FilterLink>
  </p>
)

export default Footer
