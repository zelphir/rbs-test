import React from 'react'
import PropTypes from 'prop-types'

import './Toolbar.css'

const Toolbar = ({ searchBy, sortBy }) => {
  return (
    <div className="toolbar">
      <input placeholder="Search by name..." onChange={searchBy} />
      <div className="sort">
        Sort by Amount:{' '}
        <button onClick={sortBy} data-order="ASC">
          ASC
        </button>{' '}
        |{' '}
        <button onClick={sortBy} data-order="DESC">
          DESC
        </button>
      </div>
    </div>
  )
}

Toolbar.propTypes = {
  searchBy: PropTypes.func.isRequired,
  sortBy: PropTypes.func.isRequired
}

export default Toolbar
