class SudokuSolver {

  validate(puzzleString) {
  }

  const board = function convertToBoard(puzzleString){
    var board = []
    puzzleArr = puzzleString.split("");
    puzzleArr.forEach(num => {
      if(num === "."){
        return num = 0;
      } 
      return parseInt(num)
    })
    while(puzzleArr[0]) {
      board.push(puzzleArr.splice(0, 9));
    }
    return board;
  }

  nextEmptySpot(board){
    for (let i=0; i<9; i++){
      for (let j=0; j<9; j++){
        if (board[i][j] === 0) {
          return [i, j];
        }
      }
    }
    return [-1, -1];
  }

  checkRowPlacement(puzzleString, row, column, value) {

  }

  checkColPlacement(puzzleString, row, column, value) {

  }

  checkRegionPlacement(puzzleString, row, column, value) {

  }

  solve(puzzleString) {
  }
}

module.exports = SudokuSolver;

