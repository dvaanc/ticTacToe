'use strict';
//player handler 
const player = (side) => {
  this.side = side;
  const getSide = () => side;

  return { getSide };
}

//game board handler
const gameBoard = (() => {
  const _board = 
  ["", "", "",
   "", "", "",
   "", "", ""];
  
  const resetBoard = () => {
    for(elem in _board) board[elem] = "";
  };
    
  return { resetBoard };
})();


// dom handler
const ui = (() => {
  // cache dom
  const cellsEl = document.querySelectorAll(".cell");
    // cellsEl.forEach(cell => {
    //   cell.addEventListener("click", )
    // })
  const restartEl = document.querySelector("#restart");
  const messageEl = document.querySelector(".message");
  // set message
  // update cell on player click
  const updateCell = () => {

  }
  // reset all cells to ""
  return { updateCell }

})();



// game logic
const game = (() => {
  const player1 = player("X");
  const player2 = player("O");

})();
