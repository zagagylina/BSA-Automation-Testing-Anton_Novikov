const { Button, Input, BaseElement } = require('../elements');

class ProfilePage {
  constructor() {    
    this.editProfileButton = new Button('button[class="styles_btn___s1BB styles_medium-round__3KyFO styles_gray-light__3fTxu styles_edit__ftuHl"]');
    this.surnameField = new Input('input[name="surname"]');
    this.submitButton = new Button('div.styles_editContainer__3utW5');

    // nameField: await $('input[name="surname"]'),

    // this.surnameinfo = new BaseElement();
    // const mySurname = $('input[name="surname"]');

  }

  async editProfile({surname}) {
    await this.editProfileButton.click();
    await this.surnameField.setValue(surname);
    await this.submitButton.click();
  }

  async getValueOf(filed) {
    let result;
    switch (filed) {
      case "surname":
      default:
        result = this.surnameField.getText();
        break;
    }
    return result;
  }

}

module.exports = { ProfilePage };
