import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('<App />', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should call fetchData in componentDidMount', () => {
    const fetchDataSpy = jest.spyOn(App.prototype, 'fetchData')
    shallow(<App />)
    expect(fetchDataSpy).toHaveBeenCalledTimes(1)
  })

  it('should render the loading message on mount', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.text()).toBe('loading...')
  })

  it('should render the transactions after fetching data', () => {
    const t = {
      id: 1,
      amount: 85.91,
      date: '2012-02-02T00:00:00.000Z',
      business: 'Bode - Kreiger',
      name: 'Savings Account 6670',
      type: 'withdrawal',
      account: '86389677'
    }
    const wrapper = shallow(<App />)
    wrapper.setState({ isLoading: false, transactions: [t] })
    expect(wrapper.children()).toHaveLength(1)
  })

  it('should render the no transactions message if empty array', () => {
    const wrapper = shallow(<App />)
    wrapper.setState({ isLoading: false, transactions: [] })
    expect(wrapper.childAt(0).text()).toBe(':-( Ops, no transactions found!')
  })

  it('should render the error message on error', () => {
    const wrapper = shallow(<App />)
    wrapper.setState({ isError: true })
    expect(wrapper.text()).toBe(':-( Ops, something went wrong!')
  })
})
