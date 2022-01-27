function minMoves(target, maxDoubles) {
  let moves = 0;
  while (target > 1) {
    if (target % 2 === 0 && maxDoubles > 0) {
      target = target / 2;
      maxDoubles--;
    } else {
      target--;
    }
    moves++;
  }
  return moves;
}

console.log(minMoves(10, 4));
module.exports = minMoves;