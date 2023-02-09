const scoreTable = document.getElementById('leader-list');

const displayScore = (ScoreList) => {
  ScoreList.forEach((score) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${score.user} : ${score.score}</td>`;
    scoreTable.appendChild(newRow);
  });
};

export default displayScore;