const request = require("supertest");

const app = require("../../app");

describe("GET /history", () => {
  it("Should respond with a 200 status code", () =>
    request(app)
      .get("/history")
      .expect("Content-Type", /json/)
      .expect(200));
});
