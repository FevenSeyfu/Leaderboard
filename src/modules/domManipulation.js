import scoreBoard from './scoreBoard.js';

import displayScore from './displayScore.js';

const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');

const game = new scoreBoard();
let id;
const startGame = () => {
  game.createGame('TicTacToe')
  .then((response) => response.result.split(' '))
  .then ((res) => {
    [id] = [res[3]];
  })
};
const getScores = () => {
  game.getScores(id).then((response) => displayScore(response.result));
};
const AddScore = (e) => {
  game.postScore(id, nameInput.value, scoreInput.value);
  nameInput.value = '';
  scoreInput.value = '';
  e.preventDefault();
};

export { startGame, AddScore, getScores };