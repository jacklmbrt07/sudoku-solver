const chai = require("chai");
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', () => {
  suite("POST on /api/solve", () => {
    test("Solve a puzzle with valid puzzle string: POST request to /api/solve", (done) => {
      // done();
    })
    test("Solve a puzzle with missing puzzle string: POST request to /api/solve", (done) => {
      // done();
    })
    test("Solve a puzzle with invalid characters: POST request to /api/solve", (done) => {
      // done();
    })
    test("Solve a puzzle with incorrect length: POST request to /api/solve", (done) => {
      // done();
    })
    test("Solve a puzzle that cannot be solved: POST request to /api/solve", (done) => {
      // done();
    })
  })
  suite("POST on /api/check", () => {
    test("Check a puzzle placement with all fields: POST request to /api/check", (done) => {
      // done();
    })
    test("Check a puzzle placement with single placement conflict: POST request to /api/check", (done) => {
      // done();
    })
    test("Check a puzzle placement with multiple placement conflicts: POST request to /api/check", (done) => {
      // done();
    })
    test("Check a puzzle placement with all placement conflicts: POST request to /api/check", (done) => {
      // done();
    })
    test("Check a puzzle placement with missing required fields: POST request to /api/check", (done) => {
      // done();
    })
    test("Check a puzzle placement with invalid characters: POST request to /api/check", (done) => {
      // done();
    })
    test("Check a puzzle placement with incorrect length: POST request to /api/check", (done) => {
      // done();
    })
    test("Check a puzzle placement with invalid placement coordinate: POST request to /api/check", (done) => {
      // done();
    })
    test("Check a puzzle placement with invalid placement value: POST request to /api/check", (done) => {
      // done();
    })
  })
});

