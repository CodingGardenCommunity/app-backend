const request = require('supertest');
const { connection } = require('mongoose');

const app = require('../../app');
const FAQ = require('./faq.model');

const ids = {
  invalid: 'invalid_id',
  nonexistent: 'aaaaaaaaaaaaaaaaaaaaaaaa',
};

async function prePopulate() {
  const question = 'Populate Question';
  const answer = 'Populate answer';

  const { _id } = await new FAQ({ question, answer }).save();
  ids.valid = _id;
}

beforeAll(prePopulate);
afterAll(async () => {
  await FAQ.deleteMany({});
  connection.close();
});

describe('GET /faq', () => {
  it('Should respond with a 200 status code',
    () => request(app)
      .get('/faq')
      .expect('Content-Type', /json/)
      .expect(200));
  it('Should respond with array.',
    async () => {
      const res = await request(app)
        .get('/faq')
        .expect(200);
      expect(res.body).toEqual(expect.any(Array));
    });
  it('Should respond with a non-empty array.',
    async () => {
      const res = await request(app)
        .get('/faq')
        .expect(200);
      expect(res.body).toEqual(expect.any(Array));
      expect(res.body.length).toBeGreaterThan(0);
    });
});


describe('GET /faq/:id', () => {
  it('With invalid id, should respond with invalid id message.',
    async () => {
      const res = await request(app)
        .get(`/faq/${ids.invalid}`)
        .expect(404);

      expect(res.body.status).toBe(404);
      expect(res.body.message).toBe('Invalid FAQ ID.');
    });
  it('With non existant id, Should respond with non existent id message.',
    async () => {
      const res = await request(app)
        .get(`/faq/${ids.nonexistent}`)
        .expect(404);

      expect(res.body.status).toBe(404);
      expect(res.body.message).toBe('The requested ID does not exist.');
    });
  it('With valid id, should respond with statuscode 200.',
    () => request(app)
      .get(`/faq/${ids.valid}`)
      .expect(200));
});


describe('POST /faq', () => {
  it('Without a body, should respond with a 404 status code and error message',
    async () => {
      const res = await request(app)
        .post('/faq')
        .expect(404);

      expect(res.body.status).toBe(404);
      expect(res.body.message).toBe('Make sure your request includes a question and answer.');
    });
  it('With a valid body, Should respond with a 200 status code',
    async () => {
      const res = await request(app)
        .post('/faq')
        .send({ question: 'Test Question', answer: 'Test answer' })
        .expect(200);
      expect(res.body.status).toBe(200);
      expect(res.body.message).toEqual(
        expect.stringMatching(/^FAQ with ID: ([a-f0-9]{24}) has been added successfully to the DB\.$/),
      );
    });
});


describe('DELETE /faq/:id', () => {
  it('With invalid id, should respond with invalid id message.',
    async () => {
      const res = await request(app)
        .delete(`/faq/${ids.invalid}`)
        .expect(404);

      expect(res.body.status).toBe(404);
      expect(res.body.message).toBe('Invalid FAQ ID.');
    });
  it('With non existant id, Should respond with non existent id message.',
    async () => {
      const res = await request(app)
        .delete(`/faq/${ids.nonexistent}`)
        .expect(404);
      expect(res.body.status).toBe(404);
      expect(res.body.message).toBe('There is no FAQ to delete with that ID.');
    });
  it('With valid id, should respond with success message.',
    async () => {
      const res = await request(app)
        .delete(`/faq/${ids.valid}`)
        .expect(200);

      expect(res.body.status).toBe(200);
      expect(res.body.message).toBe('FAQ removed successfully from DB.');
    });
});
