describe('Autorization with entering invalid data:', function () {

  //Preconditions:
  //user is registered
  it('should not be able to log in', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const signInButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`1@gmail.com`);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await browser.pause(5000);

    const errorMessage = $('div.rrt-text=Email is incorrect');
    expect(errorMessage).toBeDisplayed();
    
    await browser.reloadSession();
  });
});
