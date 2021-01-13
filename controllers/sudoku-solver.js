class SudokuSolver {

  validate(puzzleString) {
  }

  checkRowPlacement(puzzleString, row, column, value) {

  }

  checkColPlacement(puzzleString, row, column, value) {

  }

  checkRegionPlacement(puzzleString, row, column, value) {

  }

  solve(puzzleString) {
    /*
    1. If there is no empty cell in the matrix M:
    return true
    2. Let (i, j) be an empty cell in the matrix M
    3. For i from 1 to 9:
        3.1. If i is not present in the row r, in column c, and the 3x3
        submatrix of (r, c):
            a) M(r, c) = i 
            b) recursively try fill in remaining empty cells
            c) If recursion was successful:
                return true
            d) M(r, c) = 0
    4. return false
    */
  
    return puzzleString;
  }
}

module.exports = SudokuSolver;

