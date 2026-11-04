# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> OrangeHRM Authentication >> TC01 - valid login opens dashboard
- Location: tests\login.spec.js:13:3

# Error details

```
Error: page.goto: net::ERR_EMPTY_RESPONSE at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This page isn’t working" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: opensource-demo.orangehrmlive.com
      - text: didn’t send any data.
    - generic [ref=e10]: ERR_EMPTY_RESPONSE
  - button "Reload" [ref=e13] [cursor=pointer]
```

# Test source

```ts
  1  | class LoginPage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |     this.username = page.getByRole('textbox', {
  5  |       name: 'Username',
  6  |     });
  7  | 
  8  |     this.password = page.getByRole('textbox',{
  9  |         name: 'Password',
  10 |     });
  11 | 
  12 |     this.loginButton = page.getByRole('button', {
  13 |       name: 'Login',
  14 |     });
  15 |     
  16 |     this.loginHeading = page.getByRole('heading', {
  17 |       name: 'Login',
  18 |     });
  19 |   }
  20 | 
  21 |   async open() {
> 22 |     await this.page.goto('/web/index.php/auth/login');
     |                     ^ Error: page.goto: net::ERR_EMPTY_RESPONSE at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  23 |   }
  24 | 
  25 |   async login(username, password) {
  26 |     await this.username.fill(username);
  27 |     await this.password.fill(password);
  28 |     await this.loginButton.click();
  29 |   }
  30 | 
  31 |   async submitEmptyForm() {
  32 |     await this.loginButton.click();
  33 |   }
  34 | }
  35 | 
  36 | module.exports = { LoginPage };
```