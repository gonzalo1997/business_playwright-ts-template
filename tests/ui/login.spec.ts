import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pageObjects/LoginPage';
import { createValidUser } from '../../src/factories/userFactory';

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const user = createValidUser();

  await loginPage.goto();
  await loginPage.login(user.username, user.password);

  // After login, SauceDemo redirects to inventory page
  await expect(page).toHaveURL(/inventory.html/);
});