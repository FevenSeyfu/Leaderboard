import ScoreList from './createList.js';

const displayScore = (scoreTable) => {
  console.log(scoreTable);
  ScoreList.forEach((score) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${score.name} : ${score.score}</td>`;
    scoreTable.appendChild(newRow);
  });
};

export default displayScore;