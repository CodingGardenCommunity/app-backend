const puppeteer = require('puppeteer');
require('dotenv').config();
require('../../app');

const { PORT } = require('../../config');
require('../../index');

describe('GET /apiDocs/', () => {
  it('Should display "Available versions" text on page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`http://localhost:${PORT}/apiDocs/`);

    await expect(page).toMatch('Available versions');
    await browser.close();
  });
});

describe('GET /apiDocs/v1.0.0', () => {
  it('Should display "CodingGarden Community App APIs" text on page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`http://localhost:${PORT}/apiDocs/v1.0.0`);

    await expect(page).toMatch('CodingGarden Community App APIs');
    await browser.close();
  });
});
