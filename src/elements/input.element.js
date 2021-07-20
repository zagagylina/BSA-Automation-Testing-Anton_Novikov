const { BaseElement } = require('./base.element');

class Input extends BaseElement {
  constructor(selector, index) {
    super(selector, index);
  }

  async setValue(text) {
    let element;
    if (this.index) {
      element = (await $$(this.selector))[this.index];
    } else {
      element = await $(this.selector);
    }
    await this.waitForVisible(element);
    await element.setValue(text);
  }

  async getText() {
    let element;
    if (this.index) {
      element = (await $$(this.selector))[this.index];
    } else {
      element = await $(this.selector);
    }
    await this.waitForVisible(element);
    return element.getText();
  }
  
}

module.exports = { Input };
