const { expect } = require('chai');

describe('Specialty and Clinic Selection:', function () {

    //Preconditions:
  //user is registered
  //user is logged in
 
  it('should be able to select specialty and clinic', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const signInButton = await $('button');

    const profileLink = await $('a[href="/user-profile/10b17307-24a9-4893-a841-4f3b5a0899e2"]')

    const ddls = await $$('div.selectStyles')

    const specialtyDdl = ddls[0];
    const clinicDdl = ddls[1];

    const dentistValue = await $('div[id="react-select-8-option-2"]');
    const UCSFMedicalCenterValue = await $('div[id="react-select-9-option-4"]');

    const saveButtons = await $$('button[type="submit"]');
    const firstsaveButton = saveButtons[0];
    const secondsaveButton = saveButtons[1];

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`jane123smith@gmail.com`);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await profileLink.waitForDisplayed({ timeout: 5000 });
    await profileLink.click();

    await specialtyDdl.waitForDisplayed({ timeout: 5000 });
    await specialtyDdl.click();

    await dentistValue.waitForDisplayed({ timeout: 5000 });
    await dentistValue.click();

    await clinicDdl.waitForDisplayed({ timeout: 5000 });
    await clinicDdl.click();

    await UCSFMedicalCenterValue.waitForDisplayed({ timeout: 5000 });
    await UCSFMedicalCenterValue.click();

    await firstsaveButton.waitForDisplayed({ timeout: 5000 });
    await firstsaveButton.click();

    await secondsaveButton.waitForDisplayed({ timeout: 5000 });
    await secondsaveButton.click(); 
    
    await browser.waitUntil(
      async function () {
        const mySpecialty = $('div[id="react-select-8-option-2"]');
        return mySpecialty === 'dentist';
      },
      { timeout: 5000 },
    );

    await browser.waitUntil(
      async function () {
        const myClinic = await browser.$('div[id="react-select-9-option-4"]');
        return myClinic === 'UCSF Medical Center';
      },
      { timeout: 5000 },
    );

    const mySpecialty = $('div[id="react-select-8-option-2"]');
    expect(mySpecialty).to.be.eql('dentist');

    const myClinic = $('div[id="react-select-9-option-4"]');
    expect(myClinic).to.be.eql('UCSF Medical Center');
   
    await browser.reloadSession();   

    
  }); 
});
