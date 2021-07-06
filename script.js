'use strict';

const gameBoard = (function(){
  const _board = 
  ["", "", "",
   "", "", "",
   "", "", ""];
  
  const resetBoard = () => {
    for(elem in _board) board[elem] = "";
  };
    
  return { resetBoard };
})();