const { LoginPage } = require('./LoginPage');
const { DashboardPage } = require('./DashBoard');
const { PIMPage } = require('./PIM');

class PageManager {
  constructor(page) {
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashboardPage(page);
    this.pimPage = new PIMPage(page);
  }
}

module.exports = { PageManager };
