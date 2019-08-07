const request = require('supertest');

const app = require('./app');

describe('GET /', () => {
  it('Should respond with a message', async done => {
    const msg = { msg: 'Check out /contributors, /faq, /history and /video' };
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200, msg, done);
  });
});
