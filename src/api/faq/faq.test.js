const app = require('express')();
const request = require('supertest');
const router = require('./faq.routes');

app.use('/faq', router);

/* eslint-disable no-undef */
describe('FAQ test suites', () => {
  afterEach(done => done());

  describe('Faq resource', () => {
    test('should exist', async () => {
      const response = await request(app).get('/faq');
      expect(response).toBeDefined();
    });

    test('Should have a 200 response', async () => {
      const response = await request(app).get('/faq');
      expect(response.statusCode).toBe(200);
    });
  });
});
