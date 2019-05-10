const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../../app');
const FAQ = require('./faq.model');

const ids = {
  invalid: 'invalid_id',
  nonexistant: 'aaaaaaaaaaaaaaaaaaaaaaaa',
};

async function prePopulate() {
  const question = 'Populate Question';
  const answer = 'Populate answer';

  const { _id } = await new FAQ({ question, answer }).save();
  ids.valid = _id;
}

beforeAll(prePopulate);
afterAll(() => FAQ.deleteMany({}).then(() => mongoose.connection.close()));

describe('GET /faq', () => {
  it('Should respond with a 200 status code',
    () => request(app)
      .get('/faq')
      .expect('Content-Type', /json/)
      .expect(200));
  it('Should respond with array.',
    () => request(app)
      .get('/faq')
      .expect(200)
      .then((res) => {
        expect(res.body)
          .toEqual(expect.any(Array));
      }));
});


describe('GET /faq/:id', () => {
  it('With invalid id, should respond with invalid id message.',
    () => request(app)
      .get(`/faq/${ids.invalid}`)
      .expect(404)
      .then((res) => {
        expect(res.body.status).toBe(404);
        expect(res.body.message).toBe('Invalid FAQ ID.');
      }));
  it('With non existant id, Should respond with non existent id message.',
    () => request(app)
      .get(`/faq/${ids.nonexistant}`)
      .expect(404)
      .then((res) => {
        expect(res.body.status).toBe(404);
        expect(res.body.message).toBe('The requested ID does not exist.');
      }));
  it('With valid id, should respond with statuscode 200.',
    () => request(app)
      .get(`/faq/${ids.valid}`)
      .expect(200));
});
