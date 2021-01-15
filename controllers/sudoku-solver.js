class SudokuSolver {

  validate(puzzleString) {
  }

  convertToGrid(puzzleString){
    var grid = []
    let puzzleArr = puzzleString.split("");
    for(let i = 0; i < puzzleArr.length; i++) {
      puzzleArr[i] == "." ? puzzleArr[i] = 0 : puzzleArr[i] = parseInt(puzzleArr[i])
    }
    while(puzzleArr.length) {
      grid.push(puzzleArr.splice(0, 9));
    }
    return grid;
  }

  convertToString(grid){
    return grid.flat().join("");
  }

  letterToNumber(row) {
    switch (row.toUpperCase()) {
      case "A":
        return 1;
      case "B":
        return 2;
      case "C":
        return 3;
      case "D":
        return 4;
      case "E":
        return 5;
      case "F":
        return 6;
      case "G":
        return 7;
      case "H":
        return 8;
      case "I":
        return 9;
      default:
        return "none";
    }
  }

  checkRowPlacement(puzzleString, row, col, val) {
    let grid = this.convertToGrid(puzzleString)
    row = this.letterToNumber(row);
    if (grid[row-1][col -1] !== 0){
      return false;
    }
    for (let j = 0; j < 9; j++){
      if(grid[row-1][j] == val){
        return false;
      }
    }
    return true;
  }

  checkColPlacement(puzzleString, row, col, val) {
    let grid = this.convertToGrid(puzzleString)
    row = this.letterToNumber(row);
    if (grid[row-1][col -1] !== 0){
      return false;
    }
    for (let i = 0; i < 9; i++){
      if(grid[i][col - 1] == val){
        return false;
      }
    }
    return true;
  }

  checkRegionPlacement(puzzleString, row, col, val) {
    let grid = this.convertToGrid(puzzleString)
    row = this.letterToNumber(row);
    if (grid[row-1][col -1] !== 0){
      return false;
    }

    let startRow = row - (row % 3);
    let startCol = col - (col % 3);

    for( let i=0; i < 3; i++){
      for(let j=0; j < 3; j++){
        if (grid[i + startRow][j + startCol] == val){
          return false
        }
      }
    }
    return true;
  }

  solveSudoku(grid, row, col){
    const n = 9
    if (row == n - 1 && col == n) return grid;

    if (col == n) {
      row++;
      col = 0;
    }

    if (grid[row][col] != 0) return this.solveSudoku(grid, row, col+1)

    for (let num = 1; num <10; num++) {
      if (this.isSafe(grid, row, col, num)) {
        grid[row][col] = num;
        if(this.solveSudoku(grid, row, col + 1)) return grid;
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
    }
    return true;
  }


  solve(puzzleString) {
    let grid = this.convertToGrid(puzzleString);
    let solvedSudoku = this.solveSudoku(grid, 0, 0);
    if(!solvedSudoku){
      return false;
    }
    let solvedString = this.convertToString(solvedSudoku);
    return solvedString;
  }
}

module.exports = SudokuSolver;

