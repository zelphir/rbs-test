const sortByAmount = (arr, order = 'ASC') => {
  return [...arr].sort((a, b) => {
    if (order !== 'ASC' && order !== 'DESC')
      throw `Not a valid order, please use 'ASC' (default) or 'DESC'`

    return order === 'ASC' ? a.amount - b.amount : b.amount - a.amount
  })
}

export default sortByAmount
