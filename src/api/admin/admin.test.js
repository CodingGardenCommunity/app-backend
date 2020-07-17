const request = require('supertest');

const app = require('../../app');

describe('GET /admin', () => {
  it('Should respond with a 404 status code', done => {
    request(app)
      .get('/admin')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });
});

describe('POST /admin/seed', () => {
  it('Should respond with a 200 status code', done => {
    request(app)
      .post('/admin/seed')
      .expect(200, done);
  });
});

describe('POST /admin/fetch-videos', () => {
  it('Should respond with a 200 status code', done => {
    request(app)
      .post('/admin/fetch-videos')
      .expect(200, done);
  });
});
