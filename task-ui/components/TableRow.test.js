import React from 'react'
import { shallow } from 'enzyme'
import TableRow from './TableRow'

const transaction = {
  id: 1,
  amount: 85.91,
  date: '2012-02-02T00:00:00.000Z',
  business: 'Bode - Kreiger',
  name: 'Savings Account 6670',
  type: 'withdrawal',
  account: '86389677'
}

describe('<TableRow />', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<TableRow transaction={transaction} />)
    expect(wrapper).toMatchSnapshot()
  })
})
