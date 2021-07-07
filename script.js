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
  const restartEl = document.querySelector("#restart");
  const messageEl = document.querySelector(".message");
  // set message
  // update cell on player click
  // reset all cells to ""


})();



// game logic
const game = (() => {
  const player1 = player("X");
  const player2 = player("O");

})();
