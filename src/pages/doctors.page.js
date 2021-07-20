const { Button, Input } = require('../elements');

class DoctorsPage {
  constructor() {    
    this.myProfileLink = new Button('a[href="/user-profile/1bb28b6b-7d25-4728-9b2a-28f660727f7d"]');

    this.specialtyField = new Input('div.selectStyles__single-value', 0);
    this.clinicField = new Input('div.selectStyles__single-value', 1);

    this.specialtyDdl = new Button('div.selectStyles', 0);
    this.clinicDdl = new Button('div.selectStyles', 1);
    this.ddlOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');

    this.specialtySaveBtn = new Button('button[type="submit"]', 0);
    this.clinicSaveBtn = new Button('button[type="submit"]', 1);

  }

  async goToProfile() {
    await this.myProfileLink.click();
  }


  async setupSpecialty(specialty) {
    await this.specialtyDdl.click();
    await this.ddlOption.clickByText(specialty);
    await this.specialtySaveBtn.click();
  }

  async setupClinic(clinic) {
    await this.clinicDdl.click();
    await this.ddlOption.clickByText(clinic);
    await this.clinicSaveBtn.click();
  }
  

  async getValueOf(filed) {
    let result;
    switch (filed) {
      case "specialty":
        result = this.specialtyField.getText();
        break;
      case "clinic":
      default:
        result = this.clinicField.getText();
        break;
    }
    return result;
  }
}

module.exports = { DoctorsPage };
