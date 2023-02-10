// import _ from 'lodash';
import './assets/style.css';
import { startGame, AddScore, getScores } from './modules/domManipulation.js';

// event listeners
const form = document.getElementById('Add-score-form');
const refresh = document.getElementById('refresh-btn');

document.addEventListener('DOMContentLoaded', startGame);
form.addEventListener('submit', AddScore);
refresh.addEventListener('click', getScores);