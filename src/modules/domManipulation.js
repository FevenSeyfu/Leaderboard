import scoreBoard from './scoreBoard.js';

const form = document.getElementById('Add-score-form');
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');

const game = new scoreBoard();
let id;
const startGame = () => {
	game.createGame('TicTacToe')
	.then((response)=> response.result.split(' '))
	.then ((res) => {
		[id] = [res[3]];
	})
}

const AddScore = (e) => {
  game.postScore(id, nameInput.value, scoreInput.value);
  e.preventDefault();
};


// event listeners
document.addEventListener('DOMContentLoaded', startGame);
const dom = () =>{
	form.addEventListener('submit', AddScore);
}

export default dom;
