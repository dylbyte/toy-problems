const sortedSquared = (array) => {
  const squares = array.map(num => num**2);
  return squares.sort((a, b) => a - b);
}

module.exports = sortedSquared;