import sortByAmount from './sortByAmount'

const transactions = [{ amount: 85.91 }, { amount: 75.91 }, { amount: 4 }, { amount: 175.86 }]
const sorted = [{ amount: 4 }, { amount: 75.91 }, { amount: 85.91 }, { amount: 175.86 }]

test('sort by amount ASC (default)', () => {
  expect(sortByAmount(transactions)).toEqual(sorted)
})

test('sort by amount DESC', () => {
  expect(sortByAmount(transactions, 'DESC')).toEqual(sorted.reverse())
})

test('throw an error if wrong order', () => {
  expect(() => sortByAmount(transactions, 'WRONG')).toThrow()
})
