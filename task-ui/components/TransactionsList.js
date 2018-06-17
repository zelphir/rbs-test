import React from 'react'
import PropTypes from 'prop-types'
import { searchByName, sortByAmount } from 'task-library'
import TableRow from './TableRow'
import Toolbar from './Toolbar'
import TableHead from './TableHead'

import './TransactionsList.css'

class TransactionsList extends React.PureComponent {
  static propTypes = {
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        amount: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        business: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        account: PropTypes.string.isRequired
      })
    ).isRequired
  }

  state = {
    transactions: this.props.transactions
  }

  searchBy = event => {
    const value = event.target.value

    this.setState({
      transactions: searchByName(this.props.transactions, value)
    })
  }

  sortBy = event => {
    event.preventDefault()
    const order = event.target.dataset.order

    this.setState(prevState => ({
      transactions: sortByAmount(prevState.transactions, order)
    }))
  }

  render() {
    const headers = this.props.transactions[0]
    const { transactions } = this.state

    return (
      <React.Fragment>
        <Toolbar searchBy={this.searchBy} sortBy={this.sortBy} />
        <table>
          <TableHead headers={headers} />
          <tbody>
            {transactions.map(transaction => (
              <TableRow key={transaction.id} transaction={transaction} />
            ))}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default TransactionsList
