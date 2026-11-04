# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> OrangeHRM Authentication >> TC04 - logged-in user can log out
- Location: tests\login.spec.js:42:3

# Error details

```
TimeoutError: locator.fill: Timeout 10000ms exceeded.
Call log:
  - waiting for getByLabel('Password')

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [active] [ref=e23]: Admin
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [ref=e30]
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.9
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e54]
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
  17 |     await this.page.goto('/web/index.php/auth/login');
  18 |   }
  19 | 
  20 |   async login(username, password) {
  21 |     await this.username.fill(username);
> 22 |     await this.password.fill(password);
     |                         ^ TimeoutError: locator.fill: Timeout 10000ms exceeded.
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