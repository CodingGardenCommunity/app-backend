const request = require('supertest');
const app = require('../../app');

describe('GET /docs/versions', () => {
  it('Should respond with a 200 status code', done =>
    request(app)
      .get('/docs/versions')
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .expect(200, done));
});

describe('GET /docs/v1', () => {
  it('Should respond with a 200 status code', done =>
    request(app)
      .get('/docs/v1')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200, done));
});
