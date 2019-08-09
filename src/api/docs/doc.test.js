const puppeteer = require('puppeteer');
const { PORT } = require('../../config');
const app = require('../../app').listen(PORT);

let browser;
let page;
const BASE_URL = `http://localhost:${PORT}`;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close();
  app.close();
});

describe('GET /apiDocs/', () => {
  it('Should display "Available versions" text on page', async () => {
    await page.goto(`${BASE_URL}/apiDocs/`);
    await expect(page).toMatch('Available versions');
  });
});

describe('GET /apiDocs/v1.0.0', () => {
  it('Should display "CodingGarden Community App APIs" text on page', async () => {
    await page.goto(`${BASE_URL}/apiDocs/v1.0.0`);
    await expect(page).toMatch('CodingGarden Community App APIs');
  });
});
