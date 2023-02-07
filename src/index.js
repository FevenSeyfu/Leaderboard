// import _ from 'lodash';
import './assets/style.css';

import displayScore from './modules/displayScore.js';

const scoreTable = document.getElementById('leader-list');
window.onload = () => {
  displayScore(scoreTable);
};
