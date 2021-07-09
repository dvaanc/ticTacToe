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
  

  const resetBoard = () => {
    for(const elem in _board) return _board[elem] = "";
  };
    
  return { resetBoard };
})();


// dom handler
const display = (() => {
  // cache dom
  const cellsEl = document.querySelectorAll(".cell");
  const restartButtonEl = document.querySelector("#restart");
  const messageEl = document.querySelector(".message");


  // set message

  // update cell on player click
  cellsEl.forEach(cell => {
    cell.addEventListener("click", (e) => {

    })
  })
  const _updateCell = (e) => {
    
  }
  // reset all cells to "" + gameBoard
  restartButtonEl.addEventListener("click", () => {
    gameBoard.resetBoard();
    _clearCellContent();
  });

  const _clearCellContent = () => {
    cellsEl.forEach(cell => cell.innerText = "")
  }

  return {  };

})();



// game logic
const game = (() => {
  const player1 = player("X");
  const player2 = player("O");
 

  const _playRound = () => {
    
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
    let playerX = true;
    switch (playerX) {
      case true:
        playerX = false;
        return console.log(player1.getSide());
        break;
      case false:
        playerX = true;
        return console.log(player2.getSide());
    }
  }
  
  return {    };
})();

