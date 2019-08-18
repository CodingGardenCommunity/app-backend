const request = require('supertest');
const { connection } = require('mongoose');

const app = require('../../app');
const Video = require('./video.model');
const { prePopulate } = require('../../helpers/testHelpers');

const ids = {
  invalid: 'invalid_id',
  nonexistent: 'aaaaaaaaaaaaaaaaaaaaaaaa',
};

const type = 'video';
const name = 'Some name';
const date = new Date();
const description = 'Some description';

const doc = { type, name, date, description };

beforeAll(async () => {
  ids.valid = await prePopulate(Video, doc);
});

afterAll(async () => {
  await Video.deleteMany({});
  connection.close();
});

describe('GET /video', () => {
  it('Should respond with a 200 status code', done =>
    request(app)
      .get('/video')
      .expect('Content-Type', /json/)
      .expect(200, done));
});

describe('GET /video/:id', () => {
  it('With an invalid id, should respond with an invalid id message', async done => {
    const {
      body: { message },
    } = await request(app)
      .get(`/video/${ids.invalid}`)
      .expect(404);
    expect(message).toBe('Invalid Video ID.');
    done();
  });

  it('With a non existent id, should respond with a non existent id message', async done => {
    const {
      body: { message },
    } = await request(app)
      .get(`/video/${ids.nonexistent}`)
      .expect(404);
    expect(message).toBe('The requested ID does not exist.');
    done();
  });

  it('Should respond with a 200 status code for valid id', async done => {
    const { status, body } = await request(app).get(`/video/${ids.valid}`);
    expect(status).toEqual(200);
    expect(body[0].id).toBe(`${ids.valid}`);
    done();
  });

  it('Should respond with 404 status code for invalid id', async done => {
    const {
      status,
      body: { message },
    } = await request(app).get('/video/someInvalidID');
    expect(status).toEqual(404);
    expect(message).toEqual('Invalid Video ID.');
    done();
  });
});
