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
  ;(0,_bfs_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
  (0,_makeBoard_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  document.getElementById('display').innerHTML = 'Click on any square to start';
  addSquaresListeners(getStartNumber)
}

const begin = () => {
  const btnStart = document.getElementById('btnStart');
  btnStart.classList.remove('disabled');
  btnStart.addEventListener('click', startBtnClicked);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFFb0M7O0FBRXBDLDJEQUFLLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL2Fkakxpc3QuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9iZnMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9nZXRTdGFydEVuZC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL2dyYXBoRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9tYWtlQm9hcmQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWRqTGlzdCA9IFtcbiAgWzEwLCAxN10sXG4gIFsxMSwgMTYsIDE4XSxcbiAgWzgsIDEyLCAxNywgMTldLFxuICBbOSwgMTMsIDE4LCAyMF0sXG4gIFsxMCwgMTQsIDE5LCAyMV0sXG4gIFsxMSwgMTUsIDIwLCAyMl0sXG4gIFsxMiwgMjEsIDIzXSxcbiAgWzEzLCAyMl0sXG4gIFsyLCAxOCwgMjVdLFxuICBbMywgMTksIDI0LCAyNl0sXG4gIFswLCA0LCAxNiwgMjAsIDI1LCAyN10sXG4gIFsxLCA1LCAxNywgMjEsIDI2LCAyOF0sXG4gIFsyLCA2LCAxOCwgMjIsIDI3LCAyOV0sXG4gIFszLCA3LCAxOSwgMjMsIDI4LCAzMF0sXG4gIFs0LCAyMCwgMjksIDMxXSxcbiAgWzUsIDIxLCAzMF0sXG4gIFsxLCAxMCwgMjYsIDMzXSxcbiAgWzAsIDIsIDExLCAyNywgMzIsIDM0XSxcbiAgWzEsIDMsIDgsIDEyLCAyNCwgMjgsIDMzLCAzNV0sXG4gIFsyLCA0LCA5LCAxMywgMjUsIDI5LCAzNCwgMzZdLFxuICBbMywgNSwgMTAsIDE0LCAyNiwgMzAsIDM1LCAzN10sXG4gIFs0LCA2LCAxMSwgMTUsIDI3LCAzMSwgMzYsIDM4XSxcbiAgWzUsIDcsIDEyLCAyOCwgMzcsIDM5XSxcbiAgWzYsIDEzLCAyOSwgMzhdLFxuICBbOSwgMTgsIDM0LCA0MV0sXG4gIFs4LCAxMCwgMTksIDM1LCA0MCwgNDJdLFxuICBbOSwgMTEsIDE2LCAyMCwgMzIsIDM2LCA0MSwgNDNdLFxuICBbMTAsIDEyLCAxNywgMjEsIDMzLCAzNywgNDIsIDQ0XSxcbiAgWzExLCAxMywgMTgsIDIyLCAzNCwgMzgsIDQzLCA0NV0sXG4gIFsxMiwgMTQsIDE5LCAyMywgMzUsIDM5LCA0NCwgNDZdLFxuICBbMTMsIDE1LCAyMCwgMzYsIDQ1LCA0N10sXG4gIFsxNCwgMjEsIDM3LCA0Nl0sXG4gIFsxNywgMjYsIDQyLCA0OV0sXG4gIFsxNiwgMTgsIDI3LCA0MywgNDgsIDUwXSxcbiAgWzE3LCAxOSwgMjQsIDI4LCA0MCwgNDQsIDQ5LCA1MV0sXG4gIFsxOCwgMjAsIDI1LCAyOSwgNDEsIDQ1LCA1MCwgNTJdLFxuICBbMTksIDIxLCAyNiwgMzAsIDQyLCA0NiwgNTEsIDUzXSxcbiAgWzIwLCAyMiwgMjcsIDMxLCA0MywgNDcsIDUyLCA1NF0sXG4gIFsyMSwgMjMsIDI4LCA0NiwgNTMsIDU1XSxcbiAgWzIyLCAyOCwgNDUsIDU0XSxcbiAgWzI1LCAzNCwgNTAsIDU3XSxcbiAgWzI0LCAyNiwgMzUsIDUxLCA1NiwgNThdLFxuICBbMjUsIDI3LCAzMiwgMzYsIDQ4LCA1MiwgNTcsIDU5XSxcbiAgWzI2LCAyOCwgMzMsIDM3LCA0OSwgNTMsIDU4LCA2MF0sXG4gIFsyNywgMjksIDM0LCAzOCwgNTAsIDU0LCA1OSwgNjFdLFxuICBbMjgsIDMwLCAzNSwgMzksIDUxLCA1NSwgNjAsIDYyXSxcbiAgWzI5LCAzMSwgMzYsIDUyLCA2MSwgNjNdLFxuICBbMzAsIDM3LCA1MywgNjJdLFxuICBbMzMsIDQyLCA1OF0sXG4gIFszMiwgMzQsIDQzLCA1OV0sXG4gIFszMywgMzUsIDQwLCA0NCwgNTYsIDYwXSxcbiAgWzM0LCAzNiwgNDEsIDQ1LCA1NywgNjFdLFxuICBbMzUsIDM3LCA0MiwgNDYsIDU4LCA2Ml0sXG4gIFszNiwgMzgsIDQzLCA0NywgNTksIDYzXSxcbiAgWzM3LCAzOSwgNDQsIDYwXSxcbiAgWzM4LCA0NSwgNjFdLFxuICBbNDEsIDUwXSxcbiAgWzQwLCA0MiwgNTFdLFxuICBbNDEsIDQzLCA0OCwgNTJdLFxuICBbNDIsIDQ0LCA0OSwgNTNdLFxuICBbNDMsIDQ1LCA1MCwgNTRdLFxuICBbNDQsIDQ2LCA1MSwgNTVdLFxuICBbNDUsIDQ3LCA1Ml0sXG4gIFs0NiwgNTNdLFxuXTtcbmV4cG9ydCBkZWZhdWx0IGFkakxpc3Q7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cbmltcG9ydCBhZGpMaXN0IGZyb20gJy4vYWRqTGlzdC5qcyc7XG5pbXBvcnQgbWFrZUJGUyBmcm9tICcuL2dyYXBoRnVuY3Rpb24uanMnO1xuXG4vLyBSRVNVTFQgSE9MRFMgQVJSQVkgT0YgU1FVQVJFIE5VTUJFUlMgVEhFIEtOSUdIVCBUT1VDSEVTXG5jb25zdCBrbmlnaHRNb3ZlcyA9IChzdGFydCwgZW5kLCByZXN1bHQgPSBbXSkgPT4ge1xuICByZXN1bHQucHVzaChzdGFydCk7XG4gIGNvbnN0IGRpc3RhbmNlR3JpZCA9IG1ha2VCRlMoYWRqTGlzdCwgZW5kKTtcbiAgaWYgKHN0YXJ0ID09PSBlbmQpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpLmlubmVySFRNTCA9IGBZb3UgbWFkZSBpdCBpbiAke3Jlc3VsdC5sZW5ndGggLSAxfSBtb3Zlcy48YnI+SGVyZSBpcyB5b3VyIHBhdGg6ICR7cmVzdWx0fWA7XG4gICAgLy8gY29sb3IgdGhlIHNxdWFyZXMsIGRpc3BsYXkgbnVtYmVycyBhcyBrbmlnaHQgbW92ZXNcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNxdWFyZVBpY2tlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJlc3VsdFtpXSk7XG4gICAgICAgIHNxdWFyZVBpY2tlZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAoJ21lZGl1bXR1cnF1b2lzZScpO1xuICAgICAgICBzcXVhcmVQaWNrZWQuaW5uZXJUZXh0ID0gYCR7cmVzdWx0W2ldfWA7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltYWdlLnNyYyA9ICcuL29kaW5Mb2dvLnN2Zyc7XG4gICAgICAgIHNxdWFyZVBpY2tlZC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICB9LCBpICogMTAwMCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBuZXdQYXJlbnQgPSBkaXN0YW5jZUdyaWRbc3RhcnRdLnBhcmVudDtcbiAga25pZ2h0TW92ZXMobmV3UGFyZW50LCBlbmQsIHJlc3VsdCk7XG59O1xuXG4vLyBMUyBIT0xEUyBTVEFSVCBBTkQgRU5EIFNRVUFSRSBOVU1CRVJTXG5mdW5jdGlvbiBnZXRMU0RhdGFGb3JCRlMoKSB7XG4gIGNvbnN0IGNvbGxlY3Rpb24gPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgna25pZ2h0U3RhcnQnKSk7XG4gIGNvbnNvbGUubG9nKGNvbGxlY3Rpb25bMF0sIGNvbGxlY3Rpb25bMV0pO1xuICBjb25zdCBzdGFydCA9IGNvbGxlY3Rpb25bMF07XG4gIGNvbnN0IGVuZCA9IGNvbGxlY3Rpb25bMV07XG4gIGtuaWdodE1vdmVzKHN0YXJ0LCBlbmQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRMU0RhdGFGb3JCRlM7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cblxuaW1wb3J0IG1ha2VDaGVzc0JvYXJkIGZyb20gJy4vbWFrZUJvYXJkLmpzJztcbmltcG9ydCBnZXRMU0RhdGFGb3JCRlMgZnJvbSAnLi9iZnMuanMnO1xuXG5jb25zdCBhZGRTcXVhcmVzTGlzdGVuZXJzPShjYWxsQmFjayk9PntcbiAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2VsbCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNxdWFyZS5sZW5ndGg7IGkrKykge1xuICAgIHNxdWFyZVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxCYWNrKTtcbn1cbn1cblxuY29uc3QgcmVtb3ZlU3F1YXJlTGlzdGVuZXJzPShjYWxsQmFjayk9PntcbiAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2VsbCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNxdWFyZS5sZW5ndGg7IGkrKykge1xuICAgIHNxdWFyZVtpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxCYWNrKTtcbiAgfVxufVxuXG5jb25zdCBzaG93U2VsZWN0ZWRTcXVhcmU9KG51bWJlcik9PntcbiAgY29uc3Qgc3F1YXJlUGlja2VkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobnVtYmVyKTtcbiAgc3F1YXJlUGlja2VkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICgndG9tYXRvJyk7XG4gIHNxdWFyZVBpY2tlZC5pbm5lclRleHQgPSAobnVtYmVyKTtcbn1cblxuY29uc3QgcHVzaFRvTFM9KG51bSk9PntcbiAgY29uc3QgbGlzdEZyb21MUyA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdrbmlnaHRTdGFydCcpKTtcbiAgbGlzdEZyb21MUy5wdXNoKG51bSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdrbmlnaHRTdGFydCcsIEpTT04uc3RyaW5naWZ5KGxpc3RGcm9tTFMpKTtcbn1cblxuLy8gU1FVQVJFIENMSUNLRUQsIEdFVCBFTkQgTlVNQkVSXG5mdW5jdGlvbiBnZXRFbmROdW1iZXIoZSkge1xuICBjb25zdCBlbmROdW1iZXIgPSBlLnRhcmdldC5pZDtcbiAgcHVzaFRvTFMoZW5kTnVtYmVyKVxuICBzaG93U2VsZWN0ZWRTcXVhcmUoZW5kTnVtYmVyKVxuICByZW1vdmVTcXVhcmVMaXN0ZW5lcnMoZ2V0RW5kTnVtYmVyKVxuICAvLyBTV0lUQ0ggUFJPR1JBTSBGTE9XIFRPIEJGUyBNT0RVTEUgRk9SIEJSRUFEVEggRklSU1QgU0VBUkNIXG4gIGdldExTRGF0YUZvckJGUygpO1xufVxuXG5mdW5jdGlvbiBlbmFibGVTcXVhcmVzRm9yRW5kKCkge1xuICAvLyBkaXNwbGF5XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5JykuaW5uZXJIVE1MID0gJ0NsaWNrIG9uIGFueSBzcXVhcmUgdG8gc2V0IHRoZSBlbmQnO1xuICAvLyByZW1vdmUgc2VsZWN0IGJ0biBsaXN0ZW5lclxuICBjb25zdCBidG5TZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuU2VsZWN0Jyk7XG4gIGJ0blNlbGVjdC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICBidG5TZWxlY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbmFibGVTcXVhcmVzRm9yRW5kKTtcbiAgYWRkU3F1YXJlc0xpc3RlbmVycyhnZXRFbmROdW1iZXIpXG59XG5cbmZ1bmN0aW9uIGdldFN0YXJ0TnVtYmVyKGUpIHtcbiAgY29uc3Qgc3RhcnROdW1iZXIgPSBlLnRhcmdldC5pZDtcbiAgcHVzaFRvTFMoc3RhcnROdW1iZXIpXG4gIC8vIHVwZGF0ZSBkaXNwbGF5XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5JykuaW5uZXJIVE1MID0gJ0NsaWNrIFNFTEVDVCBidXR0b24gdGhlbiBwaWNrIEVuZCBTcXVhcmUnO1xuICBzaG93U2VsZWN0ZWRTcXVhcmUoc3RhcnROdW1iZXIpXG4gIHJlbW92ZVNxdWFyZUxpc3RlbmVycyhnZXRTdGFydE51bWJlcilcbiAgLy8gZW5hYmxlIFNFTEVDVCBidG5cbiAgY29uc3QgYnRuU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0blNlbGVjdCcpO1xuICBidG5TZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgYnRuU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW5hYmxlU3F1YXJlc0ZvckVuZCk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0QnRuQ2xpY2tlZCgpIHtcbiAgLy8gc2V0IGEgYmxhbmsgYXJyYXkgaW4gTG9jYWwgc3RvcmFnZVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgna25pZ2h0U3RhcnQnLCBbSlNPTi5zdHJpbmdpZnkoW10pXSk7XG4gIC8vIENsZWFyIGJvYXJkIG9mIHByZXZpb3VzIGRpc3BsYXllZCBpdGVtc1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJykuaW5uZXJIVE1MID0gJyc7XG4gIG1ha2VDaGVzc0JvYXJkKCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5JykuaW5uZXJIVE1MID0gJ0NsaWNrIG9uIGFueSBzcXVhcmUgdG8gc3RhcnQnO1xuICBhZGRTcXVhcmVzTGlzdGVuZXJzKGdldFN0YXJ0TnVtYmVyKVxufVxuXG5jb25zdCBiZWdpbiA9ICgpID0+IHtcbiAgY29uc3QgYnRuU3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuU3RhcnQnKTtcbiAgYnRuU3RhcnQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgYnRuU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEJ0bkNsaWNrZWQpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGJlZ2luO1xuIiwiLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cblxuY29uc3QgUXVldWUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuaXRlbXMgPSBbXTtcbn07XG5RdWV1ZS5wcm90b3R5cGUuZW5xdWV1ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgdGhpcy5pdGVtcy5wdXNoKG9iaik7XG59O1xuUXVldWUucHJvdG90eXBlLmRlcXVldWUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLml0ZW1zLnNoaWZ0KCk7XG59O1xuUXVldWUucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aCA9PT0gMDtcbn07XG5cbmNvbnN0IG1ha2VCRlMgPSBmdW5jdGlvbiAoZ3JhcGgsIHJvb3QpIHtcbiAgY29uc3QgYmZzSW5mbyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JhcGgubGVuZ3RoOyBpKyspIHtcbiAgICBiZnNJbmZvW2ldID0ge1xuICAgICAgc3RlcHM6IG51bGwsXG4gICAgICBwYXJlbnQ6IG51bGwsXG4gICAgfTtcbiAgfVxuICAvLyBTT1VSQ0UgR0lWRU4gRElTVD0wIEFORCBQQVJFTlQgPSBOdWxsXG4gIGNvbnN0IHF1ZXVlID0gbmV3IFF1ZXVlKCk7XG4gIHF1ZXVlLmVucXVldWUocm9vdCk7XG4gIGJmc0luZm9bcm9vdF0uc3RlcHMgPSAwO1xuXG4gIC8vIFNPVVJDRSBTQ0FOTkVEIEZPUiBDSElMRFJFTlxuICB3aGlsZSAoIXF1ZXVlLmlzRW1wdHkoKSkge1xuICAgIGNvbnN0IHUgPSBxdWV1ZS5kZXF1ZXVlKCk7XG5cbiAgICAvLyBnZXQgYWxsIGNoaWxkcmVuIG9mIHUvU09VUkNFICYgZ2l2ZSB0aGVtIHByb3BlcnRpZXM7IFUgaXMgYWxyZWFkeSBkb25lXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmFwaFt1XS5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gbmFtZSBlYWNoIENISUxEIHYsIE9ORSBCWSBPTkVcbiAgICAgIGNvbnN0IHYgPSBncmFwaFt1XVtpXTtcbiAgICAgIGlmIChiZnNJbmZvW3ZdLnN0ZXBzID09PSBudWxsKSB7XG4gICAgICAgIC8vIGdpdmUgZWFjaCBhICdkaXN0YW5jZSdcbiAgICAgICAgYmZzSW5mb1t2XS5zdGVwcyA9IGJmc0luZm9bdV0uc3RlcHMgKyAxO1xuICAgICAgICAvLyBnaXZlIGVhY2ggYSBwcmVkZWNlc3Nvci9wYXJlbnRcbiAgICAgICAgYmZzSW5mb1t2XS5wYXJlbnQgPSB1O1xuICAgICAgICAvLyBwdXQgRUFDSCBDSElMRCBPRiBTT1VSQ0UvViBJTiBxOiB0byBiZWNvbWUgdSBpbiBuZXh0IGl0ZXJhdGlvblxuICAgICAgICBxdWV1ZS5lbnF1ZXVlKHYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYmZzSW5mbztcbn07XG5leHBvcnQgZGVmYXVsdCBtYWtlQkZTO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmNvbnN0IG1ha2VDaGVzc0JvYXJkID0gKCkgPT4ge1xuICBjb25zdCBDaGVzc1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAvLyBDcmVhdGUgYSByb3dcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcbiAgICAgIC8vIENyZWF0ZSBjZWxscyBpbiB0aGUgcm93XG4gICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICB0ZC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICB0ZC5pZCA9IDggKiBpICsgajtcbiAgICAgIC8vIElmIHRoZSBzdW0gb2YgY2VsbCBjb29yZGluYXRlcyBpcyBldmVuIHRoZW4gY29sb3IgdGhlIGNlbGwgd2hpdGVcbiAgICAgIGlmICgoaSArIGopICUgMiA9PT0gMCkge1xuICAgICAgICB0ZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snO1xuICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XG4gICAgICB9XG4gICAgfVxuICAgIENoZXNzVGFibGUuYXBwZW5kQ2hpbGQodHIpO1xuICB9XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKS5hcHBlbmRDaGlsZChDaGVzc1RhYmxlKTtcbiAgQ2hlc3NUYWJsZS5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzEwMCUnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VDaGVzc0JvYXJkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tdW5yZXNvbHZlZCAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cblxuaW1wb3J0IGJlZ2luIGZyb20gXCIuL2dldFN0YXJ0RW5kLmpzXCJcblxuYmVnaW4oKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==