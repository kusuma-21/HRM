# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> OrangeHRM Authentication >> TC01 - valid login opens dashboard
- Location: tests\login.spec.js:9:3

# Error details

```
Error: page.goto: Target page, context or browser has been closed
```

# Test source

```ts
  1  | class LoginPage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |     this.username = page.getByRole('textbox', {
  5  |       name: 'Username',
  6  |     });
  7  |     this.password = page.getByLabel('Password');
  8  |     this.loginButton = page.getByRole('button', {
  9  |       name: 'Login',
  10 |     });
  11 |     this.loginHeading = page.getByRole('heading', {
  12 |       name: 'Login',
  13 |     });
  14 |   }
  15 | 
  16 |   async open() {
> 17 |     await this.page.goto('/web/index.php/auth/login');
     |                     ^ Error: page.goto: Target page, context or browser has been closed
  18 |   }
  19 | 
  20 |   async login(username, password) {
  21 |     await this.username.fill(username);
  22 |     await this.password.fill(password);
  23 |     await this.loginButton.click();
  24 |   }
  25 | 
  26 |   async submitEmptyForm() {
  27 |     await this.loginButton.click();
  28 |   }
  29 | }
  30 | 
  31 | module.exports = { LoginPage };
```