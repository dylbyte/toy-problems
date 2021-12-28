/* eslint-disable no-param-reassign */
// 3 points for winner
function updateScores(scores, winner) {
  if (!scores[winner]) scores[winner] = 0;
  scores[winner] += 3;
}

// O(n) time | O(k) space
function tournamentWinner(competitions, results) {
  const HOME_TEAM_WON = 1;
  const scores = {};
  let bestTeam = '';

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];
    let winningTeam = '';

    if (results[i] === HOME_TEAM_WON) {
      updateScores(scores, homeTeam);
      winningTeam = homeTeam;
    } else {
      updateScores(scores, awayTeam);
      winningTeam = awayTeam;
    }

    if (!bestTeam || scores[winningTeam] > scores[bestTeam]) {
      bestTeam = winningTeam;
    }
  }
  return bestTeam;
}

// Do not edit the line below.
module.exports = tournamentWinner;
