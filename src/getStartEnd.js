/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */

import makeChessBoard from './makeBoard.js';
import getLSDataForBFS from './bfs.js';

const addSquaresListeners=(callBack)=>{
  const square = document.getElementsByClassName('cell');
  for (let i = 0; i < square.length; i++) {
    square[i].addEventListener('click', callBack);
}
}

const removeSquareListeners=(callBack)=>{
  const square = document.getElementsByClassName('cell');
  for (let i = 0; i < square.length; i++) {
    square[i].removeEventListener('click', callBack);
  }
}

const showSelectedSquare=(number)=>{
  const squarePicked = document.getElementById(number);
  squarePicked.style.backgroundColor = ('tomato');
  squarePicked.innerText = (number);
}

const pushToLS=(num)=>{
  const listFromLS = JSON.parse(window.localStorage.getItem('knightStart'));
  listFromLS.push(num);
  localStorage.setItem('knightStart', JSON.stringify(listFromLS));
}

// SQUARE CLICKED, GET END NUMBER
function getEndNumber(e) {
  const endNumber = e.target.id;
  pushToLS(endNumber)
  showSelectedSquare(endNumber)
  removeSquareListeners(getEndNumber)
  // SWITCH PROGRAM FLOW TO BFS MODULE FOR BREADTH FIRST SEARCH
  getLSDataForBFS();
}

function enableSquaresForEnd() {
  // display
  document.getElementById('display').innerHTML = 'Click on any square to set the end';
  // remove select btn listener
  const btnSelect = document.getElementById('btnSelect');
  btnSelect.classList.add('disabled');
  btnSelect.removeEventListener('click', enableSquaresForEnd);
  addSquaresListeners(getEndNumber)
}

function getStartNumber(e) {
  const startNumber = e.target.id;
  pushToLS(startNumber)
  // update display
  document.getElementById('display').innerHTML = 'Click SELECT button then pick End Square';
  showSelectedSquare(startNumber)
  removeSquareListeners(getStartNumber)
  // enable SELECT btn
  const btnSelect = document.getElementById('btnSelect');
  btnSelect.classList.remove('disabled');
  btnSelect.addEventListener('click', enableSquaresForEnd);
}

function startBtnClicked() {
  // set a blank array in Local storage
  localStorage.setItem('knightStart', [JSON.stringify([])]);
  // Clear board of previous displayed items
  document.getElementById('container').innerHTML = '';
  makeChessBoard();
  document.getElementById('display').innerHTML = 'Click on any square to start';
  addSquaresListeners(getStartNumber)
}

const begin = () => {
  const btnStart = document.getElementById('btnStart');
  btnStart.classList.remove('disabled');
  btnStart.addEventListener('click', startBtnClicked);
};
export default begin;
