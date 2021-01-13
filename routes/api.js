'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {

    });
    
  app.route('/api/solve')
    .post((req, res) => {
      // Test #2
      let puzzle = req.body.puzzle;
      let regex = /[^1-9.]/g.test(puzzle)
      let solution = solver.solve(puzzle)
      //Test 3
      if (!puzzle){
        return res.json({error: 'Required field missing'})
      // Test 4
      } else if (regex){ 
        return res.json({error: 'Invalid characters in puzzle'})
      // Test 5
      } else if (puzzle.length != 81) { 
        return res.json({error: 'Expected puzzle to be 81 characters long'})
      // Test 6
      } else if (!solution) {
        return res.json({ error: "Puzzle cannot be solved"})
      } else {
        return res.json({solution})
      }
    });
};
