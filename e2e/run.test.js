/* eslint-disable no-undef */
const puppeteer = require('puppeteer');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('../webpack.config');

const compiler = webpack(config);
const devServerOptions = { ...config.devServer };
// create instance
const server = new WebpackDevServer(devServerOptions, compiler);

jest.setTimeout(30000);

const url = 'http://localhost:3000/index.html';

describe('Open browser and go to localhost website built using routemamba', () => {
  let browser;
  let page;
  it('should start webpack dev server', async () => {
    // start
    await server.listen();
  });
  it('it should open a browser and visit localhost index.html', async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page
      .goto(url, {
        waitUntil: 'domcontentloaded',
      })
      .catch((err) => console.log('error loading url', err));
  });
  //  test page index content loaded or not
  test('Check index.html page content loaded or not', async () => {
    await page.waitForSelector('root > body-root > h1');
    const indexContent = await page.$eval('root > body-root > h1', (tag) => {
      return tag.innerHTML;
    });

    expect(indexContent).toBe('home');
  });

  // check local state change working or not
  test('Check localstate.useState() function working perfectly or not', async () => {
    await page.click('#inc_state_val');
    const stateValue = await page.$eval('#count', (tag) => {
      return tag.innerHTML;
    });
    expect(stateValue).toBe('1');
  });

  test('Should localstate.useState() function working perfectly or not from console', async () => {
    const stateValue = await page.$eval('#count', (tag) => {
      setCount(567);
      return tag.innerHTML;
    });
    expect(stateValue).toBe('567');
  });

  // check navigation header is loaded or not
  test('Check header loaded or not', async () => {
    const nav = await page.$$('root > header-root > nav');
    expect(nav.length).toBe(1);
  });

  // check after onlick on about, routing ok or not
  test('On click about navigation, it should load about page in root', async () => {
    await page.click('#about_nav');
    await page.waitForSelector('root > body-root > h1');
    const indexContent = await page.$eval('root > body-root > h1', (tag) => {
      return tag.innerHTML;
    });

    expect(indexContent).toBe('about');
  });

  // check after onlick on tabs navigation, routing ok or not
  test('On click tabs navigation, it should load tabs page in root', async () => {
    await page.click('#tabs_nav');
    await page.waitForSelector('root > body-root > h1');
    const indexContent = await page.$eval('root > body-root > h1', (tag) => {
      return tag.innerHTML;
    });

    expect(indexContent).toBe('tabs');
  });

  //  check tabs is working fine or not
  test('check first tab swticher loaded or not and check tab content and switching working or not', async () => {
    const tabSwitcher = await page.$$('.tab-switcher');
    await expect(tabSwitcher.length).toBe(3);

    // check tabs content loaded or not on first load
    const tab1Content = await page.$eval('#tab1 > h2', (e) => {
      return e.innerHTML;
    });
    const tab2Content = await page.$eval('#tab2 > h2', (e) => {
      return e.innerHTML;
    });
    const tab3Content = await page.$eval('#tab3 > h2', (e) => {
      return e.innerHTML;
    });

    expect(tab1Content).toBe('This is tab 1');
    expect(tab2Content).toBe('This is tab 2');
    expect(tab3Content).toBe('This is tab 3');
  });

  it('it should close browser', async () => {
    await browser.close();
  });

  it('should stop webpack dev server', async () => {
    // close/stop
    setTimeout(async () => {
      await server.close();
    }, 5000);
  });
});
