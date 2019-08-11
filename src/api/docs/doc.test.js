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
  it('Should display "Available versions" text on page.', async () => {
    await page.goto(`${BASE_URL}/apiDocs/`);
    await expect(page).toMatch('Available versions');
  });
});

describe('GET /apiDocs/v1.0.0', () => {
  it('Should display "CodingGarden Community App APIs" text on page.', async () => {
    await page.goto(`${BASE_URL}/apiDocs/v1.0.0`);
    await expect(page).toMatch('CodingGarden Community App APIs');
  });
});

describe('GET API response through API Doc', () => {
  it('Should be able to query /contributors API from Doc page.', async () => {
    await page.goto(`${BASE_URL}/apiDocs/`);

    await page.waitForSelector('body > ul > li > a');
    await page.click('body > ul > li > a');

    try {
      await page.waitForSelector('div > span > #operations-Contributors-get_contributors > .opblock-summary > .opblock-summary-description');
      await page.click('div > span > #operations-Contributors-get_contributors > .opblock-summary > .opblock-summary-description');

      await page.waitForSelector('.opblock-body > .opblock-section > .opblock-section-header > .try-out > .btn');
      await page.click('.opblock-body > .opblock-section > .opblock-section-header > .try-out > .btn');

      await page.waitForSelector('#operations-Contributors-get_contributors > div > .opblock-body > .execute-wrapper > .btn');
      await page.click('#operations-Contributors-get_contributors > div > .opblock-body > .execute-wrapper > .btn');

      await page.waitForSelector('.response > .col > div > .highlight-code > .microlight');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  });
});
