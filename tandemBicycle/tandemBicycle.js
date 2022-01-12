function tandemBicycle(team1Speeds, team2Speeds, fastest) {
  let sum = 0;
  team1Speeds.sort((a,b) => b - a);
  team2Speeds.sort((a,b) => fastest ? a - b : b - a);

  for (let i = 0; i < team1Speeds.length; i++) {
    sum += Math.max(team1Speeds[i], team2Speeds[i]);
  }

  return sum;
}

module.exports = tandemBicycle;