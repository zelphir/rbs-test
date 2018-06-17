import searchByName from './searchByName'

const transactions = [{ name: 'a name' }, { name: 'a b name' }, { name: 'a c name' }]

test(`filter by empty string returns array`, () => {
  expect(searchByName(transactions, '')).toEqual(transactions)
})

test(`filter by white space returns array`, () => {
  expect(searchByName(transactions, ' ')).toEqual(transactions)
})

test(`filter not found returns empty array`, () => {
  expect(searchByName(transactions, 'z')).toEqual([])
})

test(`filter by name 'c'`, () => {
  expect(searchByName(transactions, 'c')).toEqual([{ name: 'a c name' }])
})
