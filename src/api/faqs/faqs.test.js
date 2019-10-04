const request = require('supertest');
const { connection } = require('mongoose');

const app = require('../../app');
const FAQ = require('./faqs.model');
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

describe('GET /faqs', () => {
  it('Should respond with a 200 status code', done =>
    request(app)
      .get('/faqs')
      .expect('Content-Type', /json/)
      .expect(200, done));
  it('Should respond with an array', async done => {
    const { body } = await request(app)
      .get('/faqs')
      .expect(200);
    expect(body).toEqual(expect.any(Array));
    done();
  });
  it('Should respond with a non-empty array', async done => {
    const { body } = await request(app)
      .get('/faqs')
      .expect(200);
    expect(body).toEqual(expect.any(Array));
    expect(body.length).toBeGreaterThan(0);
    done();
  });
});

describe('GET /faqs/:id', () => {
  it('With an invalid id, should respond with an invalid id message', async done => {
    const {
      body: { message },
    } = await request(app)
      .get(`/faqs/${ids.invalid}`)
      .expect(404);
    expect(message).toBe('Invalid FAQ ID.');
    done();
  });
  it('With a non existent id, should respond with a non existent id message', async done => {
    const {
      body: { message },
    } = await request(app)
      .get(`/faqs/${ids.nonexistent}`)
      .expect(404);
    expect(message).toBe('The requested ID does not exist.');
    done();
  });
  it('With a valid id, should respond with a 200 status code', done =>
    request(app)
      .get(`/faqs/${ids.valid}`)
      .expect(200, done));
});

describe('POST /faqs', () => {
  it('Without a body, should respond with a 404 status code and error message', async done => {
    const {
      body: { message },
    } = await request(app)
      .post('/faqs')
      .expect(404);
    expect(message).toBe('Make sure your request includes a question and answer.');
    done();
  });
  it('With a valid body, should respond with a 200 status code', async done => {
    const {
      body: { message },
    } = await request(app)
      .post('/faqs')
      .send({ question: 'Test Question', answer: 'Test answer' })
      .expect(200);
    expect(message).toEqual(expect.stringMatching(/^FAQ with ID: ([a-f0-9]{24}) has been added successfully to the DB\.$/));
    done();
  });
});

describe('DELETE /faqs/:id', () => {
  it('With an invalid id, should respond with an invalid id message', async done => {
    const {
      body: { message },
    } = await request(app)
      .delete(`/faqs/${ids.invalid}`)
      .expect(404);
    expect(message).toBe('Invalid FAQ ID.');
    done();
  });
  it('With a non existent id, should respond with a non existent id message', async done => {
    const {
      body: { message },
    } = await request(app)
      .delete(`/faqs/${ids.nonexistent}`)
      .expect(404);
    expect(message).toBe('There is no FAQ to delete with that ID.');
    done();
  });
  it('With a valid id, should respond with a success message', async done => {
    const {
      body: { message },
    } = await request(app)
      .delete(`/faqs/${ids.valid}`)
      .expect(200);
    expect(message).toBe('FAQ removed successfully from DB.');
    done();
  });
});
