'use strict';

const playerFactory = (side) => {
  this.side = side;
  const getSide = () => side;

  return { getSide };
}

const gameBoard = (() => {
  const _board = 
  ["", "", "",
   "", "", "",
   "", "", ""];

  const fillBoard = (cellIndex, side) => {
   if(_board[cellIndex] !== "") return; 
    _board[cellIndex] = side;
  }

  const resetBoard = () => {
    for(const elem in _board) _board[elem] = "";
  };
    
  return { resetBoard, fillBoard, _board };
})();

const display = (() => {
  const cellsEl = document.querySelectorAll(".cell");
  const restartButtonEl = document.querySelector("#restart");
  const messageEl = document.querySelector(".message");

  const setMessage = (text) => {
    messageEl.textContent = text;
  }

  cellsEl.forEach(cell => {
    cell.addEventListener("click", () => {
      const cellIndex = cell.dataset.index;
      game.playRound(cellIndex);
      console.log(gameBoard._board)
    })
  })

  restartButtonEl.addEventListener("click", () => {
    gameBoard.resetBoard();
    cellsEl.forEach(cell => cell.innerText = "");
    console.log(gameBoard._board)
  });
    return { setMessage  };
})();


const game = (() => {
  const playerX = playerFactory("X");
  const playerO = playerFactory("O");
  let round = 1;
  const playRound = (cellIndex) => {
    gameBoard.fillBoard(cellIndex, playerTurn());

  }
  
  
  const checkWinCon = () => {
    const winCon = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  }

  const playerTurn = () => {
    round % 2 === 0 ? playerX.getSide() : playerO.getSide();
    round++;
    }
  
  
  return { playRound, playerTurn };
})();

console.log(game.playerTurn())


