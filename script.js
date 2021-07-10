'use strict';
//player handler 
const player = (side) => {
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


// dom handler
const display = (() => {
  // cache dom
  const cellsEl = document.querySelectorAll(".cell");
  const restartButtonEl = document.querySelector("#restart");
  const messageEl = document.querySelector(".message");


  // set message
  const setMessage = (text) => {
    messageEl.textContent = text;
  }

  // update cell on player click
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

 

// game logic
const game = (() => {
  const player1 = player("X");
  const player2 = player("O");
  let playerX = true;

  const playRound = (cellIndex) => {
    gameBoard.fillBoard(cellIndex, currentPlayerSide());

  }
  
  //check if player has won
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

  const currentPlayerSide = () => {
 
    switch (playerX) {
      case true:
        playerX = false;
        return player1.getSide();
        break;
      case false:
        playerX = true;
        return player2.getSide();
    }
  }
  
  return { playRound };
})();

