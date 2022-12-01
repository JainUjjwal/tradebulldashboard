var assert = require("assert");
var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:3011");

describe("TestCases", function () {
  //   Query to check if server returns list of all dogs.
  it("Server should return list of dogs", function (done) {
    server
      .get("/dogs")
      .expect(200)
      .end(function (err, res) {
        res.status.should.equal(200);
        done();
      });
  });
  //   Query to check if server returns list images for a specific breed.
  it("Server should return list of images", function (done) {
    server
      .get("/dogs/images/australian")
      .expect(200)
      .end(function (err, res) {
        res.status.should.equal(200);
        done();
      });
  });
  //   Query to check if server returns list images for a specific subbreed.
  it("Server should return list of images", function (done) {
    server
      .get("/dogs/images/australian/shepherd")
      .expect(200)
      .end(function (err, res) {
        res.status.should.equal(200);
        done();
      });
  });
});
