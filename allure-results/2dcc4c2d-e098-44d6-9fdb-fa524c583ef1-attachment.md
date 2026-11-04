# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.js >> OrangeHRM PIM workflow >> TC05 - navigate to PIM, add an employee, and log out
- Location: tests\navigation.spec.js:17:3

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /pim/
Received string:  ""

```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { LoginPage } = require('../pages/Loginpage');
  3  | const { DashboardPage } = require('../pages/Dashboard');
  4  | const { PIMPage } = require('../pages/PIM');
  5  | const { username, password } = require('../test-data/credentials');
  6  | 
  7  | test.describe('OrangeHRM PIM workflow', () => {
  8  |   test.beforeEach(async ({ page }) => {
  9  |     const login = new LoginPage(page);
  10 |     const dashboard = new DashboardPage(page);
  11 | 
  12 |     await login.open();
  13 |     await login.login(username, password);
  14 |     await dashboard.expectLoaded();
  15 |   });
  16 | 
  17 |   test('TC05 - navigate to PIM, add an employee, and log out', async ({ page }) => {
  18 |     const dashboard = new DashboardPage(page);
  19 |     const pim = new PIMPage(page);
  20 |     const firstName = `Test${Date.now()}`;
  21 |     const lastName = 'Employee';
  22 | 
  23 |     await dashboard.openPIM();
> 24 |     await expect(page).toHaveURL(/pim/);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  25 |     await expect(page.getByRole('heading', { name: 'PIM' })).toBeVisible();
  26 | 
  27 |     await pim.openAddEmployee();
  28 |     await pim.addEmployee(firstName, lastName);
  29 | 
  30 |     await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
  31 |     await expect(pim.firstName).toHaveValue(firstName);
  32 |     await expect(pim.lastName).toHaveValue(lastName);
  33 | 
  34 |     await dashboard.logout();
  35 |     await expect(page).toHaveURL(/auth\/login/);
  36 |   });
  37 | });
  38 | 
```