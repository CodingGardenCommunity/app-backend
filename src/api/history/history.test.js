const request = require('supertest');

const app = require('../../app');

describe('GET /history', () => {
  it('Should respond with a 200 status code', done =>
    request(app)
      .get('/history')
      .expect('Content-Type', /json/)
      .expect(200, done));
});

describe('GET /history/:id', () => {
  it('Should respond with a 200 status code for valid id', async done => {
    const { status, type, body } = await request(app).get('/history/5d53a0cfbb779e2988d67d0f');
    expect(status).toEqual(200);
    expect(type).toEqual('application/json');
    expect(body[0].id).toEqual('5d53a0cfbb779e2988d67d0f');
    done();
  });

  it('Should respond with 404 status code for invalid id', async done => {
    const {
      status,
      type,
      body: { message },
    } = await request(app).get('/history/someInvalidID');
    expect(status).toEqual(404);
    expect(type).toEqual('application/json');
    expect(message).toEqual('Invalid History ID.');
    done();
  });
});
