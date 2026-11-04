import type { Locator, Page } from '@playwright/test';

class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly loginHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByRole('textbox', {
      name: 'Username',
    });

    this.password = page.getByRole('textbox', {
      name: 'Password',
    });

    this.loginButton = page.getByRole('button', {
      name: 'Login',
    });

    this.loginHeading = page.getByRole('heading', {
      name: 'Login',
    });
  }

  async open(): Promise<void> {
    await this.page.goto('/web/index.php/auth/login');
  }

  async login(username: string, password: string): Promise<void> {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async submitEmptyForm(): Promise<void> {
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };
