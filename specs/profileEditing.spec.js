const { App } = require('../src/pages');

const app = new App();

describe('Profile Editing:', function () {
  beforeEach(async function () {
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
  });

  afterEach(async function () {
    await browser.reloadSession();
  });
  //Preconditions:
  //user is registered
  //user is logged in
  const testData = {
    user: {
      email: "marcus-shmarkus@gmail.com",
      password: "Pa55word",
    },
    values: {
      surname: 'Watson',
    }
  };
  it('should be able to change profile data', async function () {
    await app.authPage.logIn(testData.user);
    await app.doctorsPage.goToProfile();
    await app.profilePage.editProfile(testData.values);

    await browser.pause(5000);

    const mySurname = await app.profilePage.getValueOf("surname");
    expect(mySurname).toHaveValueContaining(testData.values);
  }); 
});
