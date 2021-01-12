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
      let solution = solver.solve(input)
      let solutionObject = {puzzle, solution}
      //Test 3
      if (!puzzle){
        return res.send({error: 'Required field missing'})
      }
      //test 4
      //else if (regex){ return res.send({error: "Invalid characters in puzzle"})}
      return res.json(solutionObject)
    });
};
