const request = require('supertest');

const app = require('../../app');

describe('GET /contributors', () => {
  it('Should respond with a 200 status code', async () => {
    const { status, type, body } = await request(app).get('/contributors');
    expect(status).toEqual(200);
    expect(type).toEqual('application/json');
    expect(body.length).toBeGreaterThanOrEqual(0);
  });
});

describe('GET /contributors/:id', () => {
  it('Should respond with a 200 status code for valid id', async () => {
    const { status, type, body } = await request(app).get('/contributors/w3cj');
    expect(status).toEqual(200);
    expect(type).toEqual('application/json');
    expect(body[0].id).toEqual('w3cj');
  });

  it('Should respond with 404 status code for invalid id', async () => {
    const { status, type, body: { message } } = await request(app).get('/contributors/someInvalidID');
    expect(status).toEqual(404);
    expect(type).toEqual('application/json');
    expect(message).toEqual('There is no contributor with the ID that you requested.');
  });
});
