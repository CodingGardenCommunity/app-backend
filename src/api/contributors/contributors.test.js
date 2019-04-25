const request = require('supertest');

const app = require('../../app');

describe('GET /contributors', () => {
  it('Should respond with a 200 status code',
    () => request(app)
      .get('/contributors')
      .expect('Content-Type', /json/)
      .expect(200));
});
