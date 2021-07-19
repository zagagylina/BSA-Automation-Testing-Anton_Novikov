describe('New Clinic Adding:', function () {

  //Preconditions:
  //user is registered as a doctor
  
  it('should be able to add new clinic', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const signInButton = await $('button');

    const link = await $('a[href="/clinics"]');
    const addButton = await $('button.styles_btn___s1BB.styles_without-border__3Vbp3.styles_primary-dark__1WnyR');
    
    const clinicnameField = await $('input[name="name"]');
    const addressField = await $('input[name="address"]');

    const ddls = await $$('div.selectStyles__control')

    const statusDdl = ddls[0];
    const cityDdl = ddls[1];

    const stateOption = await $('div.selectStyles__option=state');
    const bostonOption = await $('div.selectStyles__option=Boston, MA');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`john_admin2@admin.com`);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await link.waitForDisplayed({ timeout: 5000 });
    await link.click();

    await addButton.waitForDisplayed({ timeout: 5000 });
    await addButton.click();

    await clinicnameField.waitForDisplayed({ timeout: 5000 });
    await clinicnameField.setValue('Almed');

    await addressField.waitForDisplayed({ timeout: 5000 });
    await addressField.setValue('Avenu 5th, 2');

    await statusDdl.waitForDisplayed({ timeout: 5000 });
    await statusDdl.click();

    await stateOption.waitForDisplayed({ timeout: 5000 });
    await stateOption.click();

    await cityDdl.waitForDisplayed({ timeout: 5000 });
    await cityDdl.click();

    await bostonOption.waitForDisplayed({ timeout: 5000 });
    await bostonOption.click();

    const newClinic = $('span.styles_title__3xRcc=Delta')
    expect(newClinic).toExist();

    await browser.pause(5000);

  });
});
