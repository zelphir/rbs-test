const searchByName = (arr, filter) => {
  if (filter === '' || filter === ' ') return arr

  return arr.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
}

export default searchByName
