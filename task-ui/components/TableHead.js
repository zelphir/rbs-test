import React from 'react'
import PropTypes from 'prop-types'

const TableHeader = ({ headers }) => (
  <thead>
    <tr>{Object.keys(headers).map(header => <th key={header}>{header}</th>)}</tr>
  </thead>
)

TableHeader.propTypes = {
  headers: PropTypes.shape({
    id: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    business: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    account: PropTypes.string.isRequired
  }).isRequired
}

export default TableHeader
