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

  checkRowPlacement(puzzleString, row, col, val) {

  }

  checkColPlacement(puzzleString, row, col, val) {

  }

  checkRegionPlacement(puzzleString, row, col, val) {

  }

  solveSudoku(grid, row, col){
    const n = 9
    if (row == n - 1 && col == n) return true;

    if (col == n) {
      row++;
      col = 0;
    }

    if (grid[row][col] != 0) return this.solveSudoku(grid, row, col+1)

    for (let num = 1; num <10; num++) {
      if (this.isSafe(grid, row, col, num)) {
        grid[row][col] = num;
        if(this.solveSudoku(grid, row, col + 1)) return true;
      }
      grid[row][col] = 0 ;
    }
    return false;
  }

  isSafe(grid, row, col, num) {
    for (let x = 0; x <= 8; x++) {
      if (grid[row][x] == num) {
        return false;
      }
    }

    for (let x = 0; x<= 8; x++) {
      if (grid[x][col] == num) {
        return false;
      }
    }

    let startRow = row - (row % 3);
    let startCol = col - (col % 3);

    for (let i=0; i < 3; i++) {
      for (let j=0; j < 3; j++) {
        if (grid[i + startRow][j + startCol] == num) {
          return false;
        }
      }
      \
    }
  }


  solve(puzzleString) {
  }
}

module.exports = SudokuSolver;

