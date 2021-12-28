function updateScores(team, points, scores) {
  if (!scores[team]) scores[team] = 0;
  scores[team] += points;
}

function tournamentWinner2(competitions, results) {
  let bestTeam = "";
  const scores = { [bestTeam]: 0 }

  for (let i = 0; i < competitions.length; i++) {
    const result = results[i];
    const [homeTeam, awayTeam] = competitions[i];

    const winningTeam = result === 1 ? homeTeam : awayTeam;
    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[bestTeam]) {
      bestTeam = winningTeam;
    }
  }
  return bestTeam;
}

module.exports = tournamentWinner2;
