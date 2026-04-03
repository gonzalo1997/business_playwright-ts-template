import { Page } from '@playwright/test';

export async function login(page: Page) {
  const username = process.env.USERNAME!;
  const password = process.env.PASSWORD!;

  await page.goto('/');
  await page.fill('#user-name', username);
  await page.fill('#password', password);
  await page.click('#login-button');
}
