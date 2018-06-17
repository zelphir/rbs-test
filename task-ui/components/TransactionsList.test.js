import React from 'react'
import { shallow } from 'enzyme'
import TransactionsList from './TransactionsList'

const transactions = [
  {
    id: 1,
    amount: 85.91,
    date: '2012-02-02T00:00:00.000Z',
    business: 'Bode - Kreiger',
    name: 'Savings Account 6670',
    type: 'withdrawal',
    account: '86389677'
  },
  {
    id: 2,
    amount: 45.91,
    date: '2012-04-02T00:00:00.000Z',
    business: 'Bode - Kreiger',
    name: 'Money Account 4582',
    type: 'deposit',
    account: '86389532'
  }
]

let wrapper

beforeEach(() => {
  wrapper = shallow(<TransactionsList transactions={transactions} />)
})

describe('<TransactionsList />', () => {
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('searchBy | sortBy', () => {
    it('searchBy should set the filtered transactions state', () => {
      expect(wrapper.state().transactions).toEqual(transactions)
      wrapper.instance().searchBy({ target: { value: 'money' } })
      expect(wrapper.state().transactions).toEqual([transactions[1]])
    })

    it('sortBy should set the ordered transactions state', () => {
      expect(wrapper.state().transactions).toEqual(transactions)
      wrapper
        .instance()
        .sortBy({ target: { dataset: { order: 'ASC' } }, preventDefault: jest.fn() })
      expect(wrapper.state().transactions).toEqual([transactions[1], transactions[0]])
    })
  })
})
