/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import adjList from './adjList.js';
import makeBFS from './graphFunction.js';

// RESULT HOLDS ARRAY OF SQUARE NUMBERS THE KNIGHT TOUCHES
const knightMoves = (start, end, result = []) => {
  result.push(start);
  const distanceGrid = makeBFS(adjList, end);
  if (start === end) {
    document.getElementById('display').innerHTML = `You made it in ${result.length - 1} moves.<br>Here is your path: ${result}`;
    // color the squares, display numbers as knight moves
    for (let i = 1; i < result.length; i++) {
      setTimeout(() => {
        const squarePicked = document.getElementById(result[i]);
        squarePicked.style.backgroundColor = ('mediumturquoise');
        squarePicked.innerText = `${result[i]}`;
        const image = document.createElement('img');
        image.src = './odinLogo.svg';
        squarePicked.appendChild(image);
      }, i * 1000);
    }
    return;
  }
  const newParent = distanceGrid[start].parent;
  knightMoves(newParent, end, result);
};

// LS HOLDS START AND END SQUARE NUMBERS
function getLSDataForBFS() {
  const collection = JSON.parse(window.localStorage.getItem('knightStart'));
  console.log(collection[0], collection[1]);
  const start = collection[0];
  const end = collection[1];
  knightMoves(start, end);
}

export default getLSDataForBFS;
