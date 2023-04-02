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

export default makeChessBoard;
