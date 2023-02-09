const scoreTable = document.getElementById('leader-list');

const displayScore = (ScoreList) => {
	scoreTable.innerHTML = ' ';
  ScoreList.forEach((score) => {
    scoreTable.innerHTML += `
      <td>${score.user} : ${score.score}</td>`;
  });
};

export default displayScore;