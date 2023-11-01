import ScoreBoard from './scoreBoard.js';

import displayScore from './displayScore.js';

import { success, hide } from './message.js';

const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');

const Game = new ScoreBoard();
let id;
const startGame = () => {
  Game.createGame('TicTacToe')
    .then((response) => response.result.split(' '))
    .then((res) => {
      [id] = [res[3]];
    });
};
const getScores = () => {
  Game.getScores(id).then((response) => displayScore(response.result));
};
const clearField = () => {
  nameInput.value = '';
  scoreInput.value = '';
};

const AddScore = (e) => {
  Game.postScore(id, nameInput.value, scoreInput.value);
  getScores();
  clearField();
  success();
  setTimeout(hide, 3000);
  e.preventDefault();
};

export { startGame, AddScore, getScores };