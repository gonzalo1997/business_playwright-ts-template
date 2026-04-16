import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  
  // Locators
  private readonly usernameInput: Locator
  private readonly passwordInput: Locator
  private readonly loginButton: Locator

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForURL('https://www.saucedemo.com/inventory.html');
  }
}