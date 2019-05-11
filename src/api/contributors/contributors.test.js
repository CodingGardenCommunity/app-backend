const request = require('supertest');

const app = require('../../app');

describe('GET /contributors', () => {
	it('Should respond with a 200 status code', async () => {
		const res = await request(app).get('/contributors')
		expect(res.status).toEqual(200)
		expect(res.type).toEqual("application/json")
		expect(res.body.data.length).toBeGreaterThanOrEqual(0)
	})
});

describe('GET /contributors/:id', () => {
	it('Should respond with a 200 status code for valid id', async () => {
		const res = await request(app).get('/contributors/w3cj')
		expect(res.status).toEqual(200)
		expect(res.type).toEqual("application/json")
		expect(res.body.data[0].id).toEqual("w3cj")

	})

	it('Should respond with 404 status code for invalid id', async () => {
		const res = await request(app).get('/contributors/someInvalidID')
		expect(res.status).toEqual(404)
		expect(res.type).toEqual("application/json")
		expect(res.body.message).toEqual("There is no contributor with the ID that you requested.")
	})
});

