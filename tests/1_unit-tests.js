const chai = require('chai');
const assert = chai.assert;
const SudokuSolver = require('../controllers/sudoku-solver.js');

const solver = new SudokuSolver();
const validString = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.';
const puzzleAns = "135762984946381257728459613694517832812936745357824196473298561581673429269145378";


suite('UnitTests', () => {
  suite("puzzleString Tests", () => {
    test("Logic handles a valid puzzle string of 81 characters", (done) => {
      assert.equal(solver.solve(validString), puzzleAns)
      done();
    })
    test("Logic handles a puzzle string with invalid characters (not 1-9 or .)", (done) => {
      var invalidString = '1.5..2.84..63.12.7.2..5..b..9..1.0..8.2.3674.3.7.2..9.47...8..1..16....926914.37.';
      assert.equal(solver.solve(invalidString), false)
      done();
    })
    test("Logic handles a puzzle string that is not 81 characters in length", (done) => {
      var invalidString = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16926914.37.';
      assert.equal(solver.solve(invalidString), false)
      done();
    })
  })

  suite("Value Tests", () => {
    test("Logic handles a valid row placement", (done) => {
      assert.equal(solver.checkRowPlacement(validString, "A", "2", "3"), true)
      done();
    })
    test("Logic handles an invalid row placement", (done) => {
      assert.equal(solver.checkRowPlacement(validString, "B", "1", "1"), false)
      done();
    })
    test("Logic handles a valid column placement", (done) => {
      assert.equal(solver.checkColPlacement(validString, "A", "2", "3"), true)
      done();
    })
    test("Logic handles an invalid column placement", (done) => {
      assert.equal(solver.checkColPlacement(validString, "B", "1", "1"), false)
      done();
    })
    test("Logic handles a valid region placement", (done) => {
      assert.equal(solver.checkRegionPlacement(validString, "A", "2", "3"), true)
      done();
    })
    test("Logic handles an invalid region placement", (done) => {
      assert.equal(solver.checkRegionPlacement(validString, "B", "1", "1"), false)
      done();
    })
  })

  suite("Solver Tests", () => {
    test("Valid puzzle strings pass the solver", (done) => {
      assert.equal(solver.solve(puzzleAns), puzzleAns)
      done();
    })
    test("Invalid puzzle strings fail the solver", (done) => {
      var invalidString = '125..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914737.';
      assert.equal(solver.solve(invalidString), false)
      done();
    })
    test("Solver returns the the expected solution for an incomplete puzzzle", (done) => {
      assert.equal(solver.solve(validString), puzzleAns)
      done();
    })
  })
})
