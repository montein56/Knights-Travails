/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */

import makeChessBoard from './makeBoard.js';
import getLSDataForBFS from './bfs.js';

// SQUARE CLICKED, GET END NUMBER
function getEndNumber(e) {
// move end number to LS
  const endNumber = e.target.id;
  const listFromLS = JSON.parse(window.localStorage.getItem('knightStart'));
  listFromLS.push(endNumber);
  localStorage.setItem('knightStart', JSON.stringify(listFromLS));
  // color the square selected
  const squarePicked = document.getElementById(endNumber);
  squarePicked.style.backgroundColor = ('tomato');
  squarePicked.innerText = (endNumber);
  // remove squares listeners
  const square = document.getElementsByClassName('cell');
  for (let i = 0; i < square.length; i++) {
    square[i].removeEventListener('click', getEndNumber);
    square[i].classList.remove('squaresEnabled');
  }
  // SWITCH PROGRAM FLOW TO BFS MODULE FOR BREADTH FIRST SEARCH
  getLSDataForBFS();
}

function enableSquaresForEnd() {
// display
  document.getElementById('display').innerHTML = 'Click on any square to set the end';
  // remove select btn listener
  const btnSelect = document.getElementById('btnSelect');
  btnSelect.removeEventListener('click', enableSquaresForEnd);
  btnSelect.classList.add('disabled');
  // add square listeners
  const square = document.getElementsByClassName('cell');
  for (let i = 0; i < square.length; i++) {
    square[i].addEventListener('click', getEndNumber);
  }
}

function getStartNumber(e) {
  // send start number to LS
  const startNumber = e.target.id;
  const listFromLS = [];
  listFromLS.push(startNumber);
  localStorage.setItem('knightStart', JSON.stringify(listFromLS));
  // update display
  document.getElementById('display').innerHTML = 'Click SELECT button then pick End Square';
  // color the square selected
  const squarePicked = document.getElementById(startNumber);
  squarePicked.style.backgroundColor = ('tomato');
  squarePicked.innerText = (`start: ${startNumber}`);
  // remove squares listeners
  const square = document.getElementsByClassName('cell');
  for (let i = 0; i < square.length; i++) {
    square[i].removeEventListener('click', getStartNumber);
  }
  // enable SELECT btn
  const btnSelect = document.getElementById('btnSelect');
  btnSelect.classList.remove('disabled');
  btnSelect.addEventListener('click', enableSquaresForEnd);
}

function startBtnClicked() {
  // Clear board of previous displayed items & disable Select button
  const btnSelect = document.getElementById('btnSelect');
  btnSelect.classList.add('disabled');
  document.getElementById('container').innerHTML = '';
  makeChessBoard();
  document.getElementById('display').innerHTML = 'Click on any square to start';
  // add click listeners to squares on board
  const square = document.getElementsByClassName('cell');
  for (let i = 0; i < square.length; i++) {
    square[i].classList.add('squaresEnabled');
    square[i].addEventListener('click', getStartNumber);
  }
}

const begin = () => {
  // START BTN: remove disabled class & add click listener
  const btnStart = document.getElementById('btnStart');
  btnStart.classList.remove('disabled');
  btnStart.addEventListener('click', startBtnClicked);
  // - wait for Start btn click
};
export default begin;
