const { expect } = require('chai');
const { App } = require('../src/pages');

const app = new App();

const testData = {
  user: {
    email: "marcus-shmarkus@gmail.com",
    password: "Pa55word",
  },
  values: {
    specialty: 'dentist',
    clinic: 'Cleveland Clinic',
  }
};

describe('Specialty and Clinic Selection:', function () {
  beforeEach(async function () {
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
    await app.authPage.logIn(testData.user);
  });

  afterEach(async function () {
    await browser.reloadSession();
  });
  //Preconditions:
  //user is registered
  //user is logged in

  
  it('should be able to select specialty and clinic', async function () {
    await app.doctorsPage.goToProfile();
    await app.doctorsPage.setupSpecialty(testData.values.specialty);
    await app.doctorsPage.setupClinic(testData.values.clinic);

    await app.wait(500);

    const mySpecialty = await app.doctorsPage.getValueOf("specialty");
    expect(mySpecialty).to.be.eql('Dentist');

    const myClinic = await app.doctorsPage.getValueOf("clinic");
    expect(myClinic).to.be.eql('Cleveland Clinic');
   
    await browser.reloadSession();       
  }); 
});
