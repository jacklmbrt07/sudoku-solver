'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {
      const { puzzle, coordinate, value } = req.body;
      if(!puzzle || !coordinate || !value) {
        return res.json({ error: "Required field(s) missing"})
      }
      const row = coordinate.split("")[0];
      const col = coordinate.split("")[1];
      if(coordinate.length != 2 || !/[a-i]/i.test(row) || !/[1-9]/i.test(col)) {
        return res.json({ error: "Invalid coordinate"})
      }
      if(!/^(?:[1-9]|0[1-9])$/.test(value)){
        return res.json({ error: "Invalid value"})
      }
      if (puzzle.length != 81) { 
        return res.json({error: 'Expected puzzle to be 81 characters long'})
      }
      if (/[^1-9.]/g.test(puzzle)){ 
        return res.json({error: 'Invalid characters in puzzle'})
      }

      let validRow = solver.checkRowPlacement(puzzle, row, col, value)
      let validCol = solver.checkColPlacement(puzzle, row, col, value) 
      let validRegion = solver.checkRegionPlacement(puzzle, row, col, value);

      let conflicts = [];

      if (validRow && validCol && validRegion){
        res.json({ valid: true })
      } else {
        if (!validRow) conflicts.push("row");
        if (!validCol) conflicts.push("column");
        if (!validRegion) conflicts.push("region");
        res.json({ valid: false, conflict: conflicts})
      }

    });

    
  app.route('/api/solve')
    .post((req, res) => {
      // Test #2
      const { puzzle } = req.body
      let regex = /[^1-9.]/g.test(puzzle)
      //Test 3
      if (!puzzle){
        return res.json({error: 'Required field missing'})
      // Test 4
      } 
      if (regex){ 
        return res.json({error: 'Invalid characters in puzzle'})
      // Test 5
      }  
      if (puzzle.length != 81) { 
        return res.json({error: 'Expected puzzle to be 81 characters long'})
      // Test 6
      } 
      
      let solution = solver.solve(puzzle)
      if (!solution) {
        return res.json({ error: "Puzzle cannot be solved"})
      } else {
        return res.json({solution})
      }
    });
};
