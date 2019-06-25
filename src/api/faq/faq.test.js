const request = require('supertest');
const { connection } = require('mongoose');

const app = require('../../app');
const FAQ = require('./faq.model');
const { prePopulate } = require('../../helpers/testHelpers');

const ids = {
  invalid: 'invalid_id',
  nonexistent: 'aaaaaaaaaaaaaaaaaaaaaaaa',
};

const question = 'Populate Question';
const answer = 'Populate answer';
const doc = { question, answer };

beforeAll(async () => {
  ids.valid = await prePopulate(FAQ, doc);
});

afterAll(async () => {
  await FAQ.deleteMany({});
  connection.close();
});

describe('GET /faq', () => {
  it('Should respond with a 200 status code', () =>
    request(app)
      .get('/faq')
      .expect('Content-Type', /json/)
      .expect(200));
  it('Should respond with an array', async () => {
    const { body } = await request(app)
      .get('/faq')
      .expect(200);
    expect(body).toEqual(expect.any(Array));
  });
  it('Should respond with a non-empty array', async () => {
    const { body } = await request(app)
      .get('/faq')
      .expect(200);
    expect(body).toEqual(expect.any(Array));
    expect(body.length).toBeGreaterThan(0);
  });
});

describe('GET /faq/:id', () => {
  it('With an invalid id, should respond with an invalid id message', async () => {
    const {
      body: { status, message },
    } = await request(app)
      .get(`/faq/${ids.invalid}`)
      .expect(404);
    expect(status).toBe(404);
    expect(message).toBe('Invalid FAQ ID.');
  });
  it('With a non existent id, should respond with a non existent id message', async () => {
    const {
      body: { status, message },
    } = await request(app)
      .get(`/faq/${ids.nonexistent}`)
      .expect(404);
    expect(status).toBe(404);
    expect(message).toBe('The requested ID does not exist.');
  });
  it('With a valid id, should respond with a 200 status code', () =>
    request(app)
      .get(`/faq/${ids.valid}`)
      .expect(200));
});

describe('POST /faq', () => {
  it('Without a body, should respond with a 404 status code and error message', async () => {
    const {
      body: { status, message },
    } = await request(app)
      .post('/faq')
      .expect(404);
    expect(status).toBe(404);
    expect(message).toBe('Make sure your request includes a question and answer.');
  });
  it('With a valid body, should respond with a 200 status code', async () => {
    const {
      body: { status, message },
    } = await request(app)
      .post('/faq')
      .send({ question: 'Test Question', answer: 'Test answer' })
      .expect(200);
    expect(status).toBe(200);
    expect(message).toEqual(expect.stringMatching(/^FAQ with ID: ([a-f0-9]{24}) has been added successfully to the DB\.$/));
  });
});

describe('DELETE /faq/:id', () => {
  it('With an invalid id, should respond with an invalid id message', async () => {
    const {
      body: { status, message },
    } = await request(app)
      .delete(`/faq/${ids.invalid}`)
      .expect(404);
    expect(status).toBe(404);
    expect(message).toBe('Invalid FAQ ID.');
  });
  it('With a non existent id, should respond with a non existent id message', async () => {
    const {
      body: { status, message },
    } = await request(app)
      .delete(`/faq/${ids.nonexistent}`)
      .expect(404);
    expect(status).toBe(404);
    expect(message).toBe('There is no FAQ to delete with that ID.');
  });
  it('With a valid id, should respond with a success message', async () => {
    const {
      body: { status, message },
    } = await request(app)
      .delete(`/faq/${ids.valid}`)
      .expect(200);

    expect(status).toBe(200);
    expect(message).toBe('FAQ removed successfully from DB.');
  });
});
