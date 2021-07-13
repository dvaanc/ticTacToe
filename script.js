'use strict';

const playerFactory = (side) => {
  this.side = side;
  const getSide = () => side;

  return { 
    getSide 
  };
}

const gameBoard = (() => {
  const _board = 
  ["", "", "",
   "", "", "",
   "", "", ""];

  const pushIndex = (cellIndex, playerTurn) => {
   if(_board[cellIndex] !== "") return; 
    _board[cellIndex] = playerTurn;
  }

  const resetBoard = () => {
    for(const elem in _board) _board[elem] = "";
  };
    
  return { 
    resetBoard, 
    pushIndex, 
    _board
  };
})();

const display = (() => {
  const cellsEl = document.querySelectorAll(".cell");
  const restartButtonEl = document.querySelector("#restart");
  const messageEl = document.querySelector("#message");
  
  const setMessage = (text) => {
    messageEl.textContent = text;
  }

  cellsEl.forEach(cell => {
    cell.addEventListener("click", () => {
      const cellIndex = cell.dataset.index;
      if(cell.textContent !== "") return;
      cell.textContent = game.playerTurn()
      game.playGame(cellIndex);

    });
  })

  restartButtonEl.addEventListener("click", () => {
    game.resetGame();
    clearCellContent();
  });

  const clearCellContent = () => cellsEl.forEach(cell => cell.innerText = "");

    return { 
      setMessage, 
      clearCellContent, 
    };
})();


const game = (() => {
  const playerX = playerFactory("X");
  const playerO = playerFactory("O");
  let round = 1;

  const playGame = (cellIndex) => {
    if(round === 9) {
      resetGame();
      display.setMessage("Draw!");
      round = 1;
      return;
    }
    gameBoard.pushIndex(cellIndex, playerTurn());
    console.log(checkWinCon())
    round++;
    display.setMessage(`Player ${playerTurn()}'s turn!`);
    
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
    
    return winCon.some(combination => {
       return combination.every(index => gameBoard._board[index] === playerTurn());
    });
  }

  const resetGame = () => {
    round = 1; 
    gameBoard.resetBoard();
    }
  
  const playerTurn = () => {
    return round % 2 === 1 ? playerX.getSide() : playerO.getSide();
  }

    return { 
      playGame, 
      playerTurn, 
      resetGame 
    };
})();






