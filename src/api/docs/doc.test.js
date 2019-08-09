const puppeteer = require('puppeteer');
require('dotenv').config();

describe('GET /apiDocs/', () => {
  it('Should display "Available versions" text on page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    if (process.env.NODE_ENV === 'test') {
      await page.goto('http://localhost:3000/apiDocs/');
    } else if (process.env.NODE_ENV === 'development') {
      await page.goto('https://api-dev.coding.garden/apiDocs/');
    } else if (process.env.NODE_ENV === 'production') {
      await page.goto('https://api.coding.garden/apiDocs/');
    }

    await expect(page).toMatch('Available versions');
    await browser.close();
  });
});

describe('GET /apiDocs/v1.0.0', () => {
  it('Should display "CodingGarden Community App APIs" text on page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    if (process.env.NODE_ENV === 'test') {
      await page.goto('http://localhost:3000/apiDocs/v1.0.0');
    } else if (process.env.NODE_ENV === 'development') {
      await page.goto('https://api-dev.coding.garden/apiDocs/v1.0.0');
    } else if (process.env.NODE_ENV === 'production') {
      await page.goto('https://api.coding.garden/apiDocs/v1.0.0');
    }

    await expect(page).toMatch('CodingGarden Community App APIs');
    await browser.close();
  });
});
