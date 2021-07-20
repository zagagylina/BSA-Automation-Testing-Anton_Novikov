const { App } = require('../src/pages');

const app = new App();

describe('Autorization with entering invalid data:', function () {
  beforeEach(async function () {
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
  });

  afterEach(async function () {
    await browser.reloadSession();
  });

  //Preconditions:
  //user is registered  
  const USER = {
      email: "shmarkus@gmail.com",
      password: "Pa55word",
  };
  it('should not be able to log in', async function () {
    await app.authPage.logIn(USER);

    await browser.pause(5000);

    const errorMessage = $('div.rrt-text=Email is incorrect');
    expect(errorMessage).toBeDisplayed();
    
    await browser.reloadSession();
  });
});
