class PIMPage {
  constructor(page) {
    this.page = page;
    this.addEmployeeLink = page.getByRole('link', { name: 'Add Employee' });
    this.firstName = page.locator('input[name="firstName"]');
    this.lastName = page.locator('input[name="lastName"]');
    this.saveButton = page.getByRole('button', { name: 'Save', exact: true });
  }

  async openAddEmployee() {
    await this.addEmployeeLink.click();
    await this.page.getByRole('heading', { name: 'Add Employee' }).waitFor();
  }

  async addEmployee(firstName, lastName) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.saveButton.click();
  }
}

module.exports = { PIMPage };
