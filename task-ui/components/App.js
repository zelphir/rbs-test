import React from 'react'
import TransactionsList from './TransactionsList'

const API_URL = 'http://localhost:3000/api/transactions'

class App extends React.PureComponent {
  state = {
    isLoading: true,
    isError: false,
    transactions: []
  }

  async fetchData() {
    try {
      const response = await fetch(API_URL)
      const transactions = await response.json()
      this.setState({ isLoading: false, transactions })
    } catch (err) {
      this.setState({
        isLoading: false,
        isError: true
      })
      console.error(err.message) // eslint-disable-line
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    const { isLoading, isError, transactions } = this.state

    if (isError) return <h2>:-( Ops, something went wrong!</h2>

    return isLoading ? (
      <div>loading...</div>
    ) : (
      <React.Fragment>
        {!transactions.length ? (
          <h2>:-( Ops, no transactions found!</h2>
        ) : (
          <TransactionsList transactions={transactions} />
        )}
      </React.Fragment>
    )
  }
}

export default App
