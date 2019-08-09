const puppeteer = require('puppeteer');
const { PORT } = require('../../config');
const app = require('../../app').listen(PORT);

let browser;

beforeAll(async () => {
  browser = await puppeteer.launch();
});

afterAll(async () => {
  await browser.close();
  app.close();
});

describe('GET /apiDocs/', () => {
  it('Should display "Available versions" text on page', async () => {
    const page = await browser.newPage();

    await page.goto(`http://localhost:${PORT}/apiDocs/`);

    await expect(page).toMatch('Available versions');
  });
});

describe('GET /apiDocs/v1.0.0', () => {
  it('Should display "CodingGarden Community App APIs" text on page', async () => {
    const page = await browser.newPage();

    await page.goto(`http://localhost:${PORT}/apiDocs/v1.0.0`);

    await expect(page).toMatch('CodingGarden Community App APIs');
  });
});
