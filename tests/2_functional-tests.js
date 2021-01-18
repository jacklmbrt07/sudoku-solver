const chai = require("chai");
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

const validString = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.';
const puzzleAns = "135762984946381257728459613694517832812936745357824196473298561581673429269145378";

suite('Functional Tests', () => {
  suite("POST on /api/solve", () => {
    test("Solve a puzzle with valid puzzle string: POST request to /api/solve", (done) => {
      chai
        .request(server)
        .post("/api/solve")
        .send({
          puzzle: validString
        })
        .end((err, res) => {
          assert.equal(res.body.solution, puzzleAns)
          done();
        })
    })
    test("Solve a puzzle with missing puzzle string: POST request to /api/solve", (done) => {
      chai
        .request(server)
        .post("/api/solve")
        .send({})
        .end((err, res) => {
          assert.equal(res.body.error, "Required field missing")
          done();
        })
    })
    test("Solve a puzzle with invalid characters: POST request to /api/solve", (done) => {
      var invalidString = '1.5..2.84..63.12.7.2..5..Q..9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'
      chai
        .request(server)
        .post("/api/solve")
        .send({
          puzzle: invalidString
        })
        .end((err, res) => {
          assert.equal(res.body.error, "Invalid characters in puzzle")
          done();
        })
    })
    test("Solve a puzzle with incorrect length: POST request to /api/solve", (done) => {
      var invalidString = '1.5..2.84..63.12.7.2..5....9..1....8.2.674.3.7.2..9.47...8..1..16....926914.37.'
      chai
        .request(server)
        .post("/api/solve")
        .send({
          puzzle: invalidString
        })
        .end((err, res) => {
          assert.equal(res.body.error, "Expected puzzle to be 81 characters long")
          done();
        })
    })
    test("Solve a puzzle that cannot be solved: POST request to /api/solve", (done) => {
      var invalidString = '1.55.2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'
      chai
        .request(server)
        .post("/api/solve")
        .send({
          puzzle: invalidString
        })
        .end((err, res) => {
          assert.equal(res.body.error, "Puzzle cannot be solved")
          done();
        })
    })
  })
  suite("POST on /api/check", () => {
    test("Check a puzzle placement with all fields: POST request to /api/check", (done) => {
      chai
        .request(server)
        .post("/api/check")
        .send({
          puzzle: validString,
          coordinate: "A2",
          value: "3"
        })
        .end((err, res) => {
          assert.equal(res.body.valid, true)
          done();
        })
    })
    test("Check a puzzle placement with single placement conflict: POST request to /api/check", (done) => {
      chai
        .request(server)
        .post("/api/check")
        .send({
          puzzle: validString,
          coordinate: "A2",
          value: "4"
        })
        .end((err, res) => {
          assert.equal(res.body.valid, false)
          assert.equal(res.body.conflict.length, 1)
          done();
        })
    })
    test("Check a puzzle placement with multiple placement conflicts: POST request to /api/check", (done) => {
      chai
        .request(server)
        .post("/api/check")
        .send({
          puzzle: validString,
          coordinate: "A2",
          value: "1"
        })
        .end((err, res) => {
          assert.equal(res.body.valid, false)
          assert.equal(res.body.conflict.length, 2)
          done();
        })
    })
    test("Check a puzzle placement with all placement conflicts: POST request to /api/check", (done) => {
      chai
        .request(server)
        .post("/api/check")
        .send({
          puzzle: validString,
          coordinate: "A2",
          value: "2"
        })
        .end((err, res) => {
          assert.equal(res.body.valid, false)
          assert.equal(res.body.conflict.length, 3)
          done();
        })
    })
    test("Check a puzzle placement with missing required fields: POST request to /api/check", (done) => {
      chai
        .request(server)
        .post("/api/check")
        .send({
          puzzle: validString,
          coordinate: "A2",
        })
        .end((err, res) => {
          assert.equal(res.body.error, "Required field(s) missing")
          done();
        })
    })
    test("Check a puzzle placement with invalid characters: POST request to /api/check", (done) => {
      var invalidString = '1.5..2.84..63.12.7.2..5..Q..9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'      
      chai
        .request(server)
        .post("/api/check")
        .send({
          puzzle: invalidString,
          coordinate: "A2",
          value: "3"
        })
        .end((err, res) => {
          assert.equal(res.body.error, "Invalid characters in puzzle")
          done();
        })
    })
    test("Check a puzzle placement with incorrect length: POST request to /api/check", (done) => {
      var invalidString = '.52.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'      
      chai
        .request(server)
        .post("/api/check")
        .send({
          puzzle: invalidString,
          coordinate: "A2",
          value: "3"
        })
        .end((err, res) => {
          assert.equal(res.body.error, "Expected puzzle to be 81 characters long")
          done();
        })
    })
    test("Check a puzzle placement with invalid placement coordinate: POST request to /api/check", (done) => {
      chai
        .request(server)
        .post("/api/check")
        .send({
          puzzle: validString,
          coordinate: "Z4",
          value: "3"
        })
        .end((err, res) => {
          assert.equal(res.body.error, "Invalid coordinate")
          done();
        })
    })
    test("Check a puzzle placement with invalid placement value: POST request to /api/check", (done) => {
      chai
        .request(server)
        .post("/api/check")
        .send({
          puzzle: validString,
          coordinate: "A2",
          value: "99"
        })
        .end((err, res) => {
          assert.equal(res.body.error, "Invalid value")
          done();
        })
    })
  })
});

