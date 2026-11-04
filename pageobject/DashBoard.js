class DashboardPage {
  constructor(page) {
    this.page = page;
    this.dashboardHeading = page.getByRole('heading', {name: 'Dashboard',});
    this.userMenu = page.locator('.oxd-userdropdown-tab');
    this.pimMenu = page.getByRole('link', { name: 'PIM' });
  }
  async expectLoaded() {
    await this.dashboardHeading.waitFor({ state: 'visible' });
  }
  async openPIM() {
    await this.pimMenu.click();
  }
  async logout() {
    await this.userMenu.click();
    await this.page.getByRole('menuitem', {name: 'Logout',}).click();
  }
}

module.exports = { DashboardPage };