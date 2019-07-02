const request = require('supertest');

const app = require('../../app');

describe('GET /video', () => {
  it('Should respond with a 200 status code', () =>
    request(app)
      .get('/video')
      .expect('Content-Type', /json/)
      .expect(200));
});
