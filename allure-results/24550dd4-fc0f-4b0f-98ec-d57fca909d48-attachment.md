# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> OrangeHRM Authentication >> Authenticated user >> TC04 - logged-in user can log out
- Location: tests\login.spec.js:36:5

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Login' })
    - locator resolved to <button type="submit" data-v-10d463b7="" data-v-0af708be="" class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action
    - click action done
    - waiting for scheduled navigations to finish

```

# Test source

```ts
  1  | class LoginPage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |     this.username = page.getByRole('textbox', {
  5  |       name: 'Username',
  6  |     });
  7  |     this.password = page.getByRole('textbox',{
  8  |         name: 'Password',
  9  |     });
  10 |     this.loginButton = page.getByRole('button', {
  11 |       name: 'Login',
  12 |     });  
  13 |     this.loginHeading = page.getByRole('heading', {
  14 |       name: 'Login',
  15 |     });
  16 |   }
  17 | 
  18 |   async open() {
  19 |     await this.page.goto('/web/index.php/auth/login');
  20 |   }
  21 | 
  22 |   async login(username, password) {
  23 |     await this.username.fill(username);
  24 |     await this.password.fill(password);
> 25 |     await this.loginButton.click();
     |                            ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  26 |   }
  27 | 
  28 |   async submitEmptyForm() {
  29 |     await this.loginButton.click();
  30 |   }
  31 | }
  32 | 
  33 | module.exports = { LoginPage };
```