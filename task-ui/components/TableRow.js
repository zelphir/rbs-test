import React from 'react'
import PropTypes from 'prop-types'

const TableRow = ({ transaction }) => (
  <tr>
    {Object.keys(transaction).map(item => {
      const key = transaction.id + item

      if (item === 'date') {
        const date = new Date(transaction[item])
        return <td key={key}>{date.toLocaleDateString()}</td>
      }

      return <td key={key}>{transaction[item]}</td>
    })}
  </tr>
)

TableRow.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    business: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    account: PropTypes.string.isRequired
  })
}

export default TableRow
