const searchByName = (arr, filter) => {
  if (filter === '' || filter === ' ') return arr

  return arr.filter(({ name }) => name.includes(filter))
}

export default searchByName
