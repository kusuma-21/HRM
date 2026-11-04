# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> OrangeHRM Authentication >> Authenticated user >> TC04 - logged-in user can log out
- Location: tests\login.spec.js:48:5

# Error details

```
Error: locator.waitFor: Test ended.
Call log:
  - waiting for getByRole('heading', { name: 'Dashboard' }) to be visible

```

# Test source

```ts
  1  | class DashboardPage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |     this.dashboardHeading = page.getByRole('heading', {name: 'Dashboard',});
  5  |     this.userMenu = page.locator('.oxd-userdropdown-tab');
  6  |     this.pimMenu = page.getByRole('link', { name: 'PIM' });
  7  |   }
  8  | 
  9  |   async expectLoaded() {
> 10 |     await this.dashboardHeading.waitFor({ state: 'visible' });
     |                                 ^ Error: locator.waitFor: Test ended.
  11 |   }
  12 | 
  13 |   async openPIM() {
  14 |     await this.pimMenu.click();
  15 |   }
  16 | 
  17 |   async logout() {
  18 |     await this.userMenu.click();
  19 |     await this.page.getByRole('menuitem', {name: 'Logout',}).click();
  20 |   }
  21 | }
  22 | 
  23 | module.exports = { DashboardPage };
```