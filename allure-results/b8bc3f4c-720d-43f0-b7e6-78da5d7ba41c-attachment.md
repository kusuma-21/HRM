# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> OrangeHRM Authentication >> TC02 - invalid credentials are rejected
- Location: tests\login.spec.js:23:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Invalid credentials')
Expected: visible
Timeout: 7000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('Invalid credentials') with timeout 7000ms
  - waiting for getByText('Invalid credentials')
    - waiting for navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { LoginPage } = require('../pages/Loginpage');
  3  | const { DashboardPage } = require('../pages/Dashboard');
  4  | const { username, password } = require('../test-data/credentials');
  5  | 
  6  | test.describe('OrangeHRM Authentication', () => {
  7  | 
  8  |   test.beforeEach(async ({ page }) => {
  9  |     const login = new LoginPage(page);
  10 |     await login.open();
  11 |   });
  12 | 
  13 |   test('TC01 - valid login opens dashboard', async ({ page }) => {
  14 |     const login = new LoginPage(page);
  15 |     const dashboard = new DashboardPage(page);
  16 | 
  17 |     await login.login(username, password);
  18 | 
  19 |     await expect(page).toHaveURL(/dashboard/);
  20 |     await dashboard.expectLoaded();
  21 |   });
  22 | 
  23 |   test('TC02 - invalid credentials are rejected', async ({ page }) => {
  24 |     const login = new LoginPage(page);
  25 | 
  26 |     await login.login('invalid_user', 'wrong_password');
  27 | 
> 28 |     await expect(page.getByText('Invalid credentials')).toBeVisible();
     |                                                         ^ Error: expect(locator).toBeVisible() failed
  29 |   });
  30 | 
  31 |   test('TC03 - empty login shows required validation', async ({ page }) => {
  32 |     const login = new LoginPage(page);
  33 | 
  34 |     await login.submitEmptyForm();
  35 | 
  36 |     await expect(page.getByText('Required').first()).toBeVisible();
  37 |   });
  38 | 
  39 |   test.describe('Authenticated user', () => {
  40 | 
  41 |     test.beforeEach(async ({ page }) => {
  42 |       const login = new LoginPage(page);
  43 |       await login.login(username, password);
  44 |     });
  45 | 
  46 |     test('TC04 - logged-in user can log out', async ({ page }) => {
  47 |       const dashboard = new DashboardPage(page);
  48 |       const login = new LoginPage(page);
  49 | 
  50 |       await dashboard.expectLoaded();
  51 |       await dashboard.logout();
  52 | 
  53 |       await expect(login.loginButton).toBeVisible();
  54 |     });
  55 |   });
  56 | });
```