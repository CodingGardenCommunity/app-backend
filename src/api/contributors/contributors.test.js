const request = require('supertest');

const app = require('../../app');

describe('GET /contributors', () => {
	it('Should respond with a 200 status code',
	  () => request(app)
	  .get('/contributors')
	  .expect('Content-Type', /json/)
	  .expect(200));
});

describe('GET /contributors/:id', () => {
	it('Should respond with a 200 status code for valid id', () => request(app)
		.get('/contributors/w3cj')
		.expect('Content-Type', /json/)
		.expect(200));

	it('Should respond with 404 status code for invalid id', () => request(app)
		.get('/contributors/someInvalidID')
		.expect('Content-Type', /json/)
		.expect(404));
});

