const { expect } = require('@playwright/test');
const { test } = require('./fixtures');
const { username, password } = require('../test-data/credentials');

test.describe('OrangeHRM PIM workflow', () => {
  test.beforeEach(async ({ pageManager }) => {
    await pageManager.loginPage.open();
    await pageManager.loginPage.login(username, password);
    await pageManager.dashboardPage.expectLoaded();
  });

  test('TC05 - navigate to PIM, add an employee, and log out', async ({ page, pageManager }) => {
    const { dashboardPage, pimPage } = pageManager;
    const firstName = `Test${Date.now()}`;
    const lastName = 'Employee';

    await dashboardPage.openPIM();
    await expect(page).toHaveURL(/pim/);
    await expect(page.getByRole('heading', { name: 'PIM' })).toBeVisible();

    await pimPage.openAddEmployee();
    await pimPage.addEmployee(firstName, lastName);

    await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
    await expect(pimPage.firstName).toHaveValue(firstName);
    await expect(pimPage.lastName).toHaveValue(lastName);

    await dashboardPage.logout();
    await expect(page).toHaveURL(/auth\/login/);
  });
});
