describe('Profile Editing:', function () {

  //Preconditions:
  //user is registered
  //user is logged in
  
  it('should be able to change profile data', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const signInButton = await $('button');

    const profileLink = await $('a[href="/user-profile/10b17307-24a9-4893-a841-4f3b5a0899e2"]')
    
    const editProfileButton = await $('button[class="styles_btn___s1BB styles_medium-round__3KyFO styles_gray-light__3fTxu styles_edit__ftuHl"]')
    
    const surnameField = await $('input[name="surname"]');
    const editButton = await $('div.styles_editContainer__3utW5')
    

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`jane123smith@gmail.com`);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await profileLink.waitForDisplayed({ timeout: 5000 });
    await profileLink.click();

    await editProfileButton.waitForDisplayed({ timeout: 5000 });
    await editProfileButton.click();

    await surnameField.waitForDisplayed({ timeout: 5000 });
    await surnameField.setValue('Watson');
    
    await editButton.waitForDisplayed({ timeout: 5000 });
    await editButton.click();

    await browser.pause(5000);

    const mySurname = $('input[name="surname"]');
    expect(mySurname).toHaveValueContaining('Watson');
   
    await browser.reloadSession();   
    
  }); 
});
