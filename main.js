/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/adjList.js":
/*!************************!*\
  !*** ./src/adjList.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const adjList = [
  [10, 17],
  [11, 16, 18],
  [8, 12, 17, 19],
  [9, 13, 18, 20],
  [10, 14, 19, 21],
  [11, 15, 20, 22],
  [12, 21, 23],
  [13, 22],
  [2, 18, 25],
  [3, 19, 24, 26],
  [0, 4, 16, 20, 25, 27],
  [1, 5, 17, 21, 26, 28],
  [2, 6, 18, 22, 27, 29],
  [3, 7, 19, 23, 28, 30],
  [4, 20, 29, 31],
  [5, 21, 30],
  [1, 10, 26, 33],
  [0, 2, 11, 27, 32, 34],
  [1, 3, 8, 12, 24, 28, 33, 35],
  [2, 4, 9, 13, 25, 29, 34, 36],
  [3, 5, 10, 14, 26, 30, 35, 37],
  [4, 6, 11, 15, 27, 31, 36, 38],
  [5, 7, 12, 28, 37, 39],
  [6, 13, 29, 38],
  [9, 18, 34, 41],
  [8, 10, 19, 35, 40, 42],
  [9, 11, 16, 20, 32, 36, 41, 43],
  [10, 12, 17, 21, 33, 37, 42, 44],
  [11, 13, 18, 22, 34, 38, 43, 45],
  [12, 14, 19, 23, 35, 39, 44, 46],
  [13, 15, 20, 36, 45, 47],
  [14, 21, 37, 46],
  [17, 26, 42, 49],
  [16, 18, 27, 43, 48, 50],
  [17, 19, 24, 28, 40, 44, 49, 51],
  [18, 20, 25, 29, 41, 45, 50, 52],
  [19, 21, 26, 30, 42, 46, 51, 53],
  [20, 22, 27, 31, 43, 47, 52, 54],
  [21, 23, 28, 46, 53, 55],
  [22, 28, 45, 54],
  [25, 34, 50, 57],
  [24, 26, 35, 51, 56, 58],
  [25, 27, 32, 36, 48, 52, 57, 59],
  [26, 28, 33, 37, 49, 53, 58, 60],
  [27, 29, 34, 38, 50, 54, 59, 61],
  [28, 30, 35, 39, 51, 55, 60, 62],
  [29, 31, 36, 52, 61, 63],
  [30, 37, 53, 62],
  [33, 42, 58],
  [32, 34, 43, 59],
  [33, 35, 40, 44, 56, 60],
  [34, 36, 41, 45, 57, 61],
  [35, 37, 42, 46, 58, 62],
  [36, 38, 43, 47, 59, 63],
  [37, 39, 44, 60],
  [38, 45, 61],
  [41, 50],
  [40, 42, 51],
  [41, 43, 48, 52],
  [42, 44, 49, 53],
  [43, 45, 50, 54],
  [44, 46, 51, 55],
  [45, 47, 52],
  [46, 53],
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (adjList);


/***/ }),

/***/ "./src/bfs.js":
/*!********************!*\
  !*** ./src/bfs.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _adjList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adjList.js */ "./src/adjList.js");
/* harmony import */ var _graphFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphFunction.js */ "./src/graphFunction.js");
/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */



// RESULT HOLDS ARRAY OF SQUARE NUMBERS THE KNIGHT TOUCHES
const knightMoves = (start, end, result = []) => {
  result.push(start);
  const distanceGrid = (0,_graphFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_adjList_js__WEBPACK_IMPORTED_MODULE_0__["default"], end);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLSDataForBFS);


/***/ }),

/***/ "./src/getStartEnd.js":
/*!****************************!*\
  !*** ./src/getStartEnd.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _makeBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeBoard.js */ "./src/makeBoard.js");
/* harmony import */ var _bfs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bfs.js */ "./src/bfs.js");
/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */




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
  (0,_bfs_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
  (0,_makeBoard_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (begin);


/***/ }),

/***/ "./src/graphFunction.js":
/*!******************************!*\
  !*** ./src/graphFunction.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable func-names */
/* eslint-disable no-plusplus */

const Queue = function () {
  this.items = [];
};
Queue.prototype.enqueue = function (obj) {
  this.items.push(obj);
};
Queue.prototype.dequeue = function () {
  return this.items.shift();
};
Queue.prototype.isEmpty = function () {
  return this.items.length === 0;
};

const makeBFS = function (graph, root) {
  const bfsInfo = [];

  for (let i = 0; i < graph.length; i++) {
    bfsInfo[i] = {
      steps: null,
      parent: null,
    };
  }
  // SOURCE GIVEN DIST=0 AND PARENT = Null
  const queue = new Queue();
  queue.enqueue(root);
  bfsInfo[root].steps = 0;

  // SOURCE SCANNED FOR CHILDREN
  while (!queue.isEmpty()) {
    const u = queue.dequeue();

    // get all children of u/SOURCE & give them properties; U is already done
    for (let i = 0; i < graph[u].length; i++) {
      // name each CHILD v, ONE BY ONE
      const v = graph[u][i];
      if (bfsInfo[v].steps === null) {
        // give each a 'distance'
        bfsInfo[v].steps = bfsInfo[u].steps + 1;
        // give each a predecessor/parent
        bfsInfo[v].parent = u;
        // put EACH CHILD OF SOURCE/V IN q: to become u in next iteration
        queue.enqueue(v);
      }
    }
  }
  return bfsInfo;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeBFS);


/***/ }),

/***/ "./src/makeBoard.js":
/*!**************************!*\
  !*** ./src/makeBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-plusplus */
const makeChessBoard = () => {
  const ChessTable = document.createElement('table');
  for (let i = 0; i < 8; i++) {
    // Create a row
    const tr = document.createElement('tr');
    for (let j = 0; j < 8; j++) {
      // Create cells in the row
      const td = document.createElement('td');
      td.classList.add('cell');
      td.id = 8 * i + j;
      // If the sum of cell coordinates is even then color the cell white
      if ((i + j) % 2 === 0) {
        td.style.backgroundColor = 'white';
        tr.appendChild(td);
      } else {
        td.style.backgroundColor = 'black';
        tr.appendChild(td);
      }
    }
    ChessTable.appendChild(tr);
  }
  document.getElementById('container').appendChild(ChessTable);
  ChessTable.setAttribute('width', '100%');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeChessBoard);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getStartEnd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getStartEnd.js */ "./src/getStartEnd.js");
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */



(0,_getStartEnd_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVvQzs7QUFFcEMsMkRBQUssRSIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvYWRqTGlzdC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL2Jmcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL2dldFN0YXJ0RW5kLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvZ3JhcGhGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL21ha2VCb2FyZC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhZGpMaXN0ID0gW1xuICBbMTAsIDE3XSxcbiAgWzExLCAxNiwgMThdLFxuICBbOCwgMTIsIDE3LCAxOV0sXG4gIFs5LCAxMywgMTgsIDIwXSxcbiAgWzEwLCAxNCwgMTksIDIxXSxcbiAgWzExLCAxNSwgMjAsIDIyXSxcbiAgWzEyLCAyMSwgMjNdLFxuICBbMTMsIDIyXSxcbiAgWzIsIDE4LCAyNV0sXG4gIFszLCAxOSwgMjQsIDI2XSxcbiAgWzAsIDQsIDE2LCAyMCwgMjUsIDI3XSxcbiAgWzEsIDUsIDE3LCAyMSwgMjYsIDI4XSxcbiAgWzIsIDYsIDE4LCAyMiwgMjcsIDI5XSxcbiAgWzMsIDcsIDE5LCAyMywgMjgsIDMwXSxcbiAgWzQsIDIwLCAyOSwgMzFdLFxuICBbNSwgMjEsIDMwXSxcbiAgWzEsIDEwLCAyNiwgMzNdLFxuICBbMCwgMiwgMTEsIDI3LCAzMiwgMzRdLFxuICBbMSwgMywgOCwgMTIsIDI0LCAyOCwgMzMsIDM1XSxcbiAgWzIsIDQsIDksIDEzLCAyNSwgMjksIDM0LCAzNl0sXG4gIFszLCA1LCAxMCwgMTQsIDI2LCAzMCwgMzUsIDM3XSxcbiAgWzQsIDYsIDExLCAxNSwgMjcsIDMxLCAzNiwgMzhdLFxuICBbNSwgNywgMTIsIDI4LCAzNywgMzldLFxuICBbNiwgMTMsIDI5LCAzOF0sXG4gIFs5LCAxOCwgMzQsIDQxXSxcbiAgWzgsIDEwLCAxOSwgMzUsIDQwLCA0Ml0sXG4gIFs5LCAxMSwgMTYsIDIwLCAzMiwgMzYsIDQxLCA0M10sXG4gIFsxMCwgMTIsIDE3LCAyMSwgMzMsIDM3LCA0MiwgNDRdLFxuICBbMTEsIDEzLCAxOCwgMjIsIDM0LCAzOCwgNDMsIDQ1XSxcbiAgWzEyLCAxNCwgMTksIDIzLCAzNSwgMzksIDQ0LCA0Nl0sXG4gIFsxMywgMTUsIDIwLCAzNiwgNDUsIDQ3XSxcbiAgWzE0LCAyMSwgMzcsIDQ2XSxcbiAgWzE3LCAyNiwgNDIsIDQ5XSxcbiAgWzE2LCAxOCwgMjcsIDQzLCA0OCwgNTBdLFxuICBbMTcsIDE5LCAyNCwgMjgsIDQwLCA0NCwgNDksIDUxXSxcbiAgWzE4LCAyMCwgMjUsIDI5LCA0MSwgNDUsIDUwLCA1Ml0sXG4gIFsxOSwgMjEsIDI2LCAzMCwgNDIsIDQ2LCA1MSwgNTNdLFxuICBbMjAsIDIyLCAyNywgMzEsIDQzLCA0NywgNTIsIDU0XSxcbiAgWzIxLCAyMywgMjgsIDQ2LCA1MywgNTVdLFxuICBbMjIsIDI4LCA0NSwgNTRdLFxuICBbMjUsIDM0LCA1MCwgNTddLFxuICBbMjQsIDI2LCAzNSwgNTEsIDU2LCA1OF0sXG4gIFsyNSwgMjcsIDMyLCAzNiwgNDgsIDUyLCA1NywgNTldLFxuICBbMjYsIDI4LCAzMywgMzcsIDQ5LCA1MywgNTgsIDYwXSxcbiAgWzI3LCAyOSwgMzQsIDM4LCA1MCwgNTQsIDU5LCA2MV0sXG4gIFsyOCwgMzAsIDM1LCAzOSwgNTEsIDU1LCA2MCwgNjJdLFxuICBbMjksIDMxLCAzNiwgNTIsIDYxLCA2M10sXG4gIFszMCwgMzcsIDUzLCA2Ml0sXG4gIFszMywgNDIsIDU4XSxcbiAgWzMyLCAzNCwgNDMsIDU5XSxcbiAgWzMzLCAzNSwgNDAsIDQ0LCA1NiwgNjBdLFxuICBbMzQsIDM2LCA0MSwgNDUsIDU3LCA2MV0sXG4gIFszNSwgMzcsIDQyLCA0NiwgNTgsIDYyXSxcbiAgWzM2LCAzOCwgNDMsIDQ3LCA1OSwgNjNdLFxuICBbMzcsIDM5LCA0NCwgNjBdLFxuICBbMzgsIDQ1LCA2MV0sXG4gIFs0MSwgNTBdLFxuICBbNDAsIDQyLCA1MV0sXG4gIFs0MSwgNDMsIDQ4LCA1Ml0sXG4gIFs0MiwgNDQsIDQ5LCA1M10sXG4gIFs0MywgNDUsIDUwLCA1NF0sXG4gIFs0NCwgNDYsIDUxLCA1NV0sXG4gIFs0NSwgNDcsIDUyXSxcbiAgWzQ2LCA1M10sXG5dO1xuZXhwb3J0IGRlZmF1bHQgYWRqTGlzdDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuaW1wb3J0IGFkakxpc3QgZnJvbSAnLi9hZGpMaXN0LmpzJztcbmltcG9ydCBtYWtlQkZTIGZyb20gJy4vZ3JhcGhGdW5jdGlvbi5qcyc7XG5cbi8vIFJFU1VMVCBIT0xEUyBBUlJBWSBPRiBTUVVBUkUgTlVNQkVSUyBUSEUgS05JR0hUIFRPVUNIRVNcbmNvbnN0IGtuaWdodE1vdmVzID0gKHN0YXJ0LCBlbmQsIHJlc3VsdCA9IFtdKSA9PiB7XG4gIHJlc3VsdC5wdXNoKHN0YXJ0KTtcbiAgY29uc3QgZGlzdGFuY2VHcmlkID0gbWFrZUJGUyhhZGpMaXN0LCBlbmQpO1xuICBpZiAoc3RhcnQgPT09IGVuZCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5JykuaW5uZXJIVE1MID0gYFlvdSBtYWRlIGl0IGluICR7cmVzdWx0Lmxlbmd0aCAtIDF9IG1vdmVzLjxicj5IZXJlIGlzIHlvdXIgcGF0aDogJHtyZXN1bHR9YDtcbiAgICAvLyBjb2xvciB0aGUgc3F1YXJlcywgZGlzcGxheSBudW1iZXJzIGFzIGtuaWdodCBtb3Zlc1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3F1YXJlUGlja2VkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmVzdWx0W2ldKTtcbiAgICAgICAgc3F1YXJlUGlja2VkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICgnbWVkaXVtdHVycXVvaXNlJyk7XG4gICAgICAgIHNxdWFyZVBpY2tlZC5pbm5lclRleHQgPSBgJHtyZXN1bHRbaV19YDtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gJy4vb2RpbkxvZ28uc3ZnJztcbiAgICAgICAgc3F1YXJlUGlja2VkLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgIH0sIGkgKiAxMDAwKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG5ld1BhcmVudCA9IGRpc3RhbmNlR3JpZFtzdGFydF0ucGFyZW50O1xuICBrbmlnaHRNb3ZlcyhuZXdQYXJlbnQsIGVuZCwgcmVzdWx0KTtcbn07XG5cbi8vIExTIEhPTERTIFNUQVJUIEFORCBFTkQgU1FVQVJFIE5VTUJFUlNcbmZ1bmN0aW9uIGdldExTRGF0YUZvckJGUygpIHtcbiAgY29uc3QgY29sbGVjdGlvbiA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdrbmlnaHRTdGFydCcpKTtcbiAgY29uc29sZS5sb2coY29sbGVjdGlvblswXSwgY29sbGVjdGlvblsxXSk7XG4gIGNvbnN0IHN0YXJ0ID0gY29sbGVjdGlvblswXTtcbiAgY29uc3QgZW5kID0gY29sbGVjdGlvblsxXTtcbiAga25pZ2h0TW92ZXMoc3RhcnQsIGVuZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldExTRGF0YUZvckJGUztcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuXG5pbXBvcnQgbWFrZUNoZXNzQm9hcmQgZnJvbSAnLi9tYWtlQm9hcmQuanMnO1xuaW1wb3J0IGdldExTRGF0YUZvckJGUyBmcm9tICcuL2Jmcy5qcyc7XG5cbi8vIFNRVUFSRSBDTElDS0VELCBHRVQgRU5EIE5VTUJFUlxuZnVuY3Rpb24gZ2V0RW5kTnVtYmVyKGUpIHtcbi8vIG1vdmUgZW5kIG51bWJlciB0byBMU1xuICBjb25zdCBlbmROdW1iZXIgPSBlLnRhcmdldC5pZDtcbiAgY29uc3QgbGlzdEZyb21MUyA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdrbmlnaHRTdGFydCcpKTtcbiAgbGlzdEZyb21MUy5wdXNoKGVuZE51bWJlcik7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdrbmlnaHRTdGFydCcsIEpTT04uc3RyaW5naWZ5KGxpc3RGcm9tTFMpKTtcbiAgLy8gY29sb3IgdGhlIHNxdWFyZSBzZWxlY3RlZFxuICBjb25zdCBzcXVhcmVQaWNrZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbmROdW1iZXIpO1xuICBzcXVhcmVQaWNrZWQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gKCd0b21hdG8nKTtcbiAgc3F1YXJlUGlja2VkLmlubmVyVGV4dCA9IChlbmROdW1iZXIpO1xuICAvLyByZW1vdmUgc3F1YXJlcyBsaXN0ZW5lcnNcbiAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2VsbCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNxdWFyZS5sZW5ndGg7IGkrKykge1xuICAgIHNxdWFyZVtpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGdldEVuZE51bWJlcik7XG4gICAgc3F1YXJlW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NxdWFyZXNFbmFibGVkJyk7XG4gIH1cbiAgLy8gU1dJVENIIFBST0dSQU0gRkxPVyBUTyBCRlMgTU9EVUxFIEZPUiBCUkVBRFRIIEZJUlNUIFNFQVJDSFxuICBnZXRMU0RhdGFGb3JCRlMoKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlU3F1YXJlc0ZvckVuZCgpIHtcbi8vIGRpc3BsYXlcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXknKS5pbm5lckhUTUwgPSAnQ2xpY2sgb24gYW55IHNxdWFyZSB0byBzZXQgdGhlIGVuZCc7XG4gIC8vIHJlbW92ZSBzZWxlY3QgYnRuIGxpc3RlbmVyXG4gIGNvbnN0IGJ0blNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5TZWxlY3QnKTtcbiAgYnRuU2VsZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW5hYmxlU3F1YXJlc0ZvckVuZCk7XG4gIGJ0blNlbGVjdC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAvLyBhZGQgc3F1YXJlIGxpc3RlbmVyc1xuICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjZWxsJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3F1YXJlLmxlbmd0aDsgaSsrKSB7XG4gICAgc3F1YXJlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0RW5kTnVtYmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTdGFydE51bWJlcihlKSB7XG4gIC8vIHNlbmQgc3RhcnQgbnVtYmVyIHRvIExTXG4gIGNvbnN0IHN0YXJ0TnVtYmVyID0gZS50YXJnZXQuaWQ7XG4gIGNvbnN0IGxpc3RGcm9tTFMgPSBbXTtcbiAgbGlzdEZyb21MUy5wdXNoKHN0YXJ0TnVtYmVyKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2tuaWdodFN0YXJ0JywgSlNPTi5zdHJpbmdpZnkobGlzdEZyb21MUykpO1xuICAvLyB1cGRhdGUgZGlzcGxheVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpLmlubmVySFRNTCA9ICdDbGljayBTRUxFQ1QgYnV0dG9uIHRoZW4gcGljayBFbmQgU3F1YXJlJztcbiAgLy8gY29sb3IgdGhlIHNxdWFyZSBzZWxlY3RlZFxuICBjb25zdCBzcXVhcmVQaWNrZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdGFydE51bWJlcik7XG4gIHNxdWFyZVBpY2tlZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAoJ3RvbWF0bycpO1xuICBzcXVhcmVQaWNrZWQuaW5uZXJUZXh0ID0gKGBzdGFydDogJHtzdGFydE51bWJlcn1gKTtcbiAgLy8gcmVtb3ZlIHNxdWFyZXMgbGlzdGVuZXJzXG4gIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NlbGwnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmUubGVuZ3RoOyBpKyspIHtcbiAgICBzcXVhcmVbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZXRTdGFydE51bWJlcik7XG4gIH1cbiAgLy8gZW5hYmxlIFNFTEVDVCBidG5cbiAgY29uc3QgYnRuU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0blNlbGVjdCcpO1xuICBidG5TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgYnRuU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW5hYmxlU3F1YXJlc0ZvckVuZCk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0QnRuQ2xpY2tlZCgpIHtcbiAgLy8gQ2xlYXIgYm9hcmQgb2YgcHJldmlvdXMgZGlzcGxheWVkIGl0ZW1zICYgZGlzYWJsZSBTZWxlY3QgYnV0dG9uXG4gIGNvbnN0IGJ0blNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5TZWxlY3QnKTtcbiAgYnRuU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKS5pbm5lckhUTUwgPSAnJztcbiAgbWFrZUNoZXNzQm9hcmQoKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXknKS5pbm5lckhUTUwgPSAnQ2xpY2sgb24gYW55IHNxdWFyZSB0byBzdGFydCc7XG4gIC8vIGFkZCBjbGljayBsaXN0ZW5lcnMgdG8gc3F1YXJlcyBvbiBib2FyZFxuICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjZWxsJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3F1YXJlLmxlbmd0aDsgaSsrKSB7XG4gICAgc3F1YXJlW2ldLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZXNFbmFibGVkJyk7XG4gICAgc3F1YXJlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0U3RhcnROdW1iZXIpO1xuICB9XG59XG5cbmNvbnN0IGJlZ2luID0gKCkgPT4ge1xuICAvLyBTVEFSVCBCVE46IHJlbW92ZSBkaXNhYmxlZCBjbGFzcyAmIGFkZCBjbGljayBsaXN0ZW5lclxuICBjb25zdCBidG5TdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5TdGFydCcpO1xuICBidG5TdGFydC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICBidG5TdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0QnRuQ2xpY2tlZCk7XG4gIC8vIC0gd2FpdCBmb3IgU3RhcnQgYnRuIGNsaWNrXG59O1xuZXhwb3J0IGRlZmF1bHQgYmVnaW47XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuXG5jb25zdCBRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5pdGVtcyA9IFtdO1xufTtcblF1ZXVlLnByb3RvdHlwZS5lbnF1ZXVlID0gZnVuY3Rpb24gKG9iaikge1xuICB0aGlzLml0ZW1zLnB1c2gob2JqKTtcbn07XG5RdWV1ZS5wcm90b3R5cGUuZGVxdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaXRlbXMuc2hpZnQoKTtcbn07XG5RdWV1ZS5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoID09PSAwO1xufTtcblxuY29uc3QgbWFrZUJGUyA9IGZ1bmN0aW9uIChncmFwaCwgcm9vdCkge1xuICBjb25zdCBiZnNJbmZvID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmFwaC5sZW5ndGg7IGkrKykge1xuICAgIGJmc0luZm9baV0gPSB7XG4gICAgICBzdGVwczogbnVsbCxcbiAgICAgIHBhcmVudDogbnVsbCxcbiAgICB9O1xuICB9XG4gIC8vIFNPVVJDRSBHSVZFTiBESVNUPTAgQU5EIFBBUkVOVCA9IE51bGxcbiAgY29uc3QgcXVldWUgPSBuZXcgUXVldWUoKTtcbiAgcXVldWUuZW5xdWV1ZShyb290KTtcbiAgYmZzSW5mb1tyb290XS5zdGVwcyA9IDA7XG5cbiAgLy8gU09VUkNFIFNDQU5ORUQgRk9SIENISUxEUkVOXG4gIHdoaWxlICghcXVldWUuaXNFbXB0eSgpKSB7XG4gICAgY29uc3QgdSA9IHF1ZXVlLmRlcXVldWUoKTtcblxuICAgIC8vIGdldCBhbGwgY2hpbGRyZW4gb2YgdS9TT1VSQ0UgJiBnaXZlIHRoZW0gcHJvcGVydGllczsgVSBpcyBhbHJlYWR5IGRvbmVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyYXBoW3VdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBuYW1lIGVhY2ggQ0hJTEQgdiwgT05FIEJZIE9ORVxuICAgICAgY29uc3QgdiA9IGdyYXBoW3VdW2ldO1xuICAgICAgaWYgKGJmc0luZm9bdl0uc3RlcHMgPT09IG51bGwpIHtcbiAgICAgICAgLy8gZ2l2ZSBlYWNoIGEgJ2Rpc3RhbmNlJ1xuICAgICAgICBiZnNJbmZvW3ZdLnN0ZXBzID0gYmZzSW5mb1t1XS5zdGVwcyArIDE7XG4gICAgICAgIC8vIGdpdmUgZWFjaCBhIHByZWRlY2Vzc29yL3BhcmVudFxuICAgICAgICBiZnNJbmZvW3ZdLnBhcmVudCA9IHU7XG4gICAgICAgIC8vIHB1dCBFQUNIIENISUxEIE9GIFNPVVJDRS9WIElOIHE6IHRvIGJlY29tZSB1IGluIG5leHQgaXRlcmF0aW9uXG4gICAgICAgIHF1ZXVlLmVucXVldWUodik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBiZnNJbmZvO1xufTtcbmV4cG9ydCBkZWZhdWx0IG1ha2VCRlM7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuY29uc3QgbWFrZUNoZXNzQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IENoZXNzVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgIC8vIENyZWF0ZSBhIHJvd1xuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xuICAgICAgLy8gQ3JlYXRlIGNlbGxzIGluIHRoZSByb3dcbiAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgIHRkLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgIHRkLmlkID0gOCAqIGkgKyBqO1xuICAgICAgLy8gSWYgdGhlIHN1bSBvZiBjZWxsIGNvb3JkaW5hdGVzIGlzIGV2ZW4gdGhlbiBjb2xvciB0aGUgY2VsbCB3aGl0ZVxuICAgICAgaWYgKChpICsgaikgJSAyID09PSAwKSB7XG4gICAgICAgIHRkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibGFjayc7XG4gICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQ2hlc3NUYWJsZS5hcHBlbmRDaGlsZCh0cik7XG4gIH1cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpLmFwcGVuZENoaWxkKENoZXNzVGFibGUpO1xuICBDaGVzc1RhYmxlLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTAwJScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZUNoZXNzQm9hcmQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby11bnJlc29sdmVkICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuXG5pbXBvcnQgYmVnaW4gZnJvbSBcIi4vZ2V0U3RhcnRFbmQuanNcIlxuXG5iZWdpbigpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9