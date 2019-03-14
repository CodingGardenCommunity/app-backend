const app = require('express')();
const request = require('supertest');
const router = require('./contributors.routes');

app.use('/contributors', router);

/* eslint-disable no-undef */
describe('Contributors test suites', () => {
  afterEach(done => done());

  describe('Contributors resource', () => {
    test('Should exist', async () => {
      const response = await request(app).get('/contributors');
      expect(response).toBeDefined();
    });

    test('Should have a 200 response', async () => {
      const response = await request(app).get('/contributors');
      expect(response.statusCode).toBe(200);
    });
  });
});
