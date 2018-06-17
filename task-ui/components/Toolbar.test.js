import React from 'react'
import { shallow } from 'enzyme'
import Toolbar from './Toolbar'

const searchBy = jest.fn()
const sortBy = jest.fn()

describe('<Toolbar />', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Toolbar searchBy={searchBy} sortBy={sortBy} />)
    expect(wrapper).toMatchSnapshot()
  })
})
