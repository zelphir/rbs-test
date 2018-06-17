import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ ok: true, json: () => [] }))

configure({ adapter: new Adapter() })
