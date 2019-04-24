const request = require('supertest');

const app = require('./app');

describe('GET /', () => {
  it('Should respond with a message', async () => {
    const msg = 'Check out /contributors and /faq';
    const response = await request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.body.msg).toBe(msg);
  });
});
