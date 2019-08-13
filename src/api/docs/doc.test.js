const puppeteer = require('puppeteer');
const { PORT } = require('../../config');
const app = require('../../app').listen(PORT);

let browser;
let page;
const BASE_URL = `http://localhost:${PORT}/docs`;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close();
  app.close();
});

describe('GET /docs/', () => {
  it('Should display "Available versions" text on page.', async () => {
    await page.goto(`${BASE_URL}/versions`);
    await expect(page).toMatch('Available versions');
  });
});

describe('GET /docs/v1', () => {
  it('Should display "CodingGarden Community App APIs" text on page.', async () => {
    await page.goto(`${BASE_URL}/v1`);
    await expect(page).toMatch('CodingGarden Community App APIs');
  });
});

const click = async (selector, p) => {
  const element = await p.waitForSelector(selector);
  await element.click();
};

describe('GET API response through API Doc', () => {
  it('Should be able to query /contributors API from Doc page.', async () => {
    await page.goto(BASE_URL);

    await click('#operations-Contributors-get_contributors', page);
    await click('.opblock-body > .opblock-section > .opblock-section-header > .try-out > .btn', page);
    await click('.opblock-body > .execute-wrapper > .btn', page);

    await page.waitForSelector('.live-responses-table tbody .response-col_status');
    const statusCodeText = await page.$eval('.live-responses-table tbody .response-col_status', el => el.textContent);
    const statusCode = parseInt(statusCodeText, 10);

    expect(statusCode).toBe(200);
  });
});
