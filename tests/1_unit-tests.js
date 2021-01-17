const chai = require('chai');
const assert = chai.assert;
const SudokuSolver = require('../controllers/sudoku-solver.js');

let solver = new SudokuSolver();
let puzzleTest = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'
let puzzleAns = "135762984946381257728459613694517832812936745357824196473298561581673429269145378";


suite('UnitTests', () => {
  suite("puzzleString Tests", () => {
    test("Logic handles a valid puzzle string of 81 characters", (done) => {})
    test("Logic handles a puzzle string with invalid characters (not 1-9 or .)", (done) => {})
    test("Logic handles a puzzle string that is not 81 characters in length", (done) => {})
  })

  suite("Value Tests", () => {
    test("Logic handles a valid row placement", (done) => {})
    test("Logic handles a valid row placement", (done) => {})
    test("Logic handles a valid row placement", (done) => {})
    test("Logic handles a valid row placement", (done) => {})
    test("Logic handles a valid row placement", (done) => {})
    test("Logic handles a valid row placement", (done) => {})
  })

  suite("Solver Tests", () => {
    test("Valid puzzle strings pass the solver", (done) => {})
    test("Invalid puzzle strings fail the solver", (done) => {})
    test("Solver returns the the expected solution for an incomplete puzzzle", (done) => {})
  })

})
