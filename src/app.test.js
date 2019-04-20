const request = require('supertest');

const app = require('./app');

describe('GET /', () => {
  it('Should respond with a message', () => {
    const msg = 'Check out /contributors and /faq';
    return request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        // jest expecations...
        expect(response.body.msg).toBe(msg);
      });
  });
});
