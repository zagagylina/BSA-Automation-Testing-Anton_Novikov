const { expect } = require('chai');
const { App } = require('../src/pages');

const app = new App();
const USER = {
  email: "marcus-shmarkus@gmail.com",
  password: "Pa55word",
};

describe('Autorization:', function () {
  beforeEach(async function () {
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
  });

  afterEach(async function () {
    await browser.reloadSession();
  });

  //Preconditions:
  //user is registered  
  it('should be able to log in', async function () {
    await app.authPage.logIn(USER);

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');    
  });
});
