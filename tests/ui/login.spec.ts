import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pageObjects/LoginPage';
import { createValidUser } from '../../src/factories/userFactory';

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const user = createValidUser();

  await loginPage.goto();
  await loginPage.login(user.username, user.password);

  await expect(page).toHaveURL(process.env.BASE_URL! + 'inventory.html');
});