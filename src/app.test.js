const request = require('supertest');

const app = require('./app');

describe('GET /', () => {
  it('Should respond with a message', async done => {
    const msg = { message: 'Check out /contributors, /faqs, /history, /docs, and /videos' };
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200, msg, done);
  });
});
