const { AuthPage } = require('./auth.page');
const { DoctorsPage } = require('./doctors.page');
const { ProfilePage } = require('./profile.page');

class App {
  constructor() {
    this.authPage = new AuthPage();
    this.doctorsPage = new DoctorsPage();
    this.profilePage = new ProfilePage();
  }

  async wait(ms){
    return new Promise(
      resolve => setTimeout(resolve, ms || 1000)
    );
  }
}

module.exports = { App };
