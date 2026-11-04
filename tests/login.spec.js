const { expect } = require('@playwright/test');
const { test } = require('./fixtures');
const { username, password } = require('../test-data/credentials');

test.describe('OrangeHRM Authentication', () => {

  test.beforeEach(async ({ pageManager }) => {
    await pageManager.loginPage.open();
  });

  test('TC01 - valid login opens dashboard', async ({ page, pageManager }) => {
    await pageManager.loginPage.login(username, password);

    await expect(page).toHaveURL(/dashboard/);
    await pageManager.dashboardPage.expectLoaded();
  });

  test('TC02 - invalid credentials are rejected', async ({ page, pageManager }) => {
    await pageManager.loginPage.login('invalid_user', 'wrong_password');

    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });

  test('TC03 - empty login shows required validation', async ({ page, pageManager }) => {
    await pageManager.loginPage.submitEmptyForm();

    await expect(page.getByText('Required').first()).toBeVisible();
  });

  test.describe('Authenticated user', () => {
    test.beforeEach(async ({ pageManager }) => {
      await pageManager.loginPage.login(username, password);
      await pageManager.dashboardPage.expectLoaded();
    });

    test('TC04 - logged-in user can log out', async ({ pageManager }) => {
      await pageManager.dashboardPage.logout();

      await expect(pageManager.loginPage.loginButton).toBeVisible();
    });
  });
});