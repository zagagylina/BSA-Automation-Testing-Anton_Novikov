const assert = require('assert');
const { expect } = require('chai');
// [x] Переход по урлу
// [x] Заполнить форму
// [x] Нажать кнопку рег.
// [x] Проверка результата
const rundomNumber = () => Math.floor(Math.random() * 10000).toString();
describe('Registration:', function () {
  xit('WDIO Test', async function () {
    await browser.url('https://webdriver.io');

    const title = await browser.getTitle();

    assert.strictEqual(
      title,
      'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO',
    );
  });

  xit('should be able to register', async function () {
    await browser.setWindowSize(1440, 960);

    await browser.url('/sign-up');

    const usernameField = await $('input[name="name"]');
    const surnameField = await $('input[name="surname"]');
    const birthDateField = await $('input[name="birthdate"]');
    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const retryPasswordField = await $('input[name="retypePassword"]');
    const phoneField = await $('input[name="phone"]');

    const ddls = await $$('div.selectStyles__control');

    const genderDdl = ddls[0];
    const statusDdl = ddls[1];

    const femaleOption = await $('div.selectStyles__option=female');
    const doctorOption = await $('div.selectStyles__option=doctor');

    const signUpButton = await $('button');

    await usernameField.waitForDisplayed({ timeout: 5000 });
    await usernameField.setValue('Marcus');

    await surnameField.waitForDisplayed({ timeout: 5000 });
    await surnameField.setValue('Aurelius');

    await birthDateField.waitForDisplayed({ timeout: 5000 });
    await birthDateField.setValue('11/11/1999');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`marcus${rundomNumber()}@gmail.com`);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    await retryPasswordField.waitForDisplayed({ timeout: 5000 });
    await retryPasswordField.setValue('Pa55word');

    await phoneField.waitForDisplayed({ timeout: 5000 });
    await phoneField.setValue('380000000000');

    await genderDdl.waitForDisplayed({ timeout: 5000 });
    await genderDdl.click();

    await femaleOption.waitForDisplayed({ timeout: 5000 });
    await femaleOption.click();

    await statusDdl.waitForDisplayed({ timeout: 5000 });
    await statusDdl.click();

    await doctorOption.waitForDisplayed({ timeout: 5000 });
    await doctorOption.click();

    await signUpButton.waitForDisplayed({ timeout: 5000 });
    await signUpButton.click();

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');

    await browser.reloadSession();
  });

  xit('[Error] element not interactable', async function () {
    await browser.maximizeWindow();
    await browser.url('http://46.101.234.121/sign-up');

    const _nameField = await $('input[name="name"]');

    browser.execute(function () {
      const nameField = document.querySelector('input[name="name"]');
      nameField.style.display = 'none';
      setTimeout(function () {
        nameField.style.display = '';
      }, 3000);
    });

    await _nameField.waitForDisplayed({ timeout: 5000 });
    await browser.pause(2000);
    await _nameField.setValue('test');
    await browser.pause(2000);
  });

  it('[Error] other element would receive the click', async function () {
    await browser.maximizeWindow();
    await browser.url('http://46.101.234.121/sign-up');
    await browser.pause(2000);

    const birthDateField = await $('input[name="birthdate"]');
    await birthDateField.click();

    await browser.pause(2000);

    const name = await $('input[name="name"]');
    await name.click();

    await browser.pause(2000);

    const passwordField = await $('input[name="password"]');
    await passwordField.click();

    await browser.pause(2000);
  });
});
