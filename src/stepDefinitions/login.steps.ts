import { chromium, Browser, Page, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';
import { Given, When, Then } from '@cucumber/cucumber';
import { createValidUser } from '../factories/userFactory';

let browser: Browser;   // explicitly typed
let page: Page;         // explicitly typed
let loginPage: LoginPage;
const user = createValidUser();

Given('the user opens the SauceDemo login page', async function () {
  browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

When('they enter valid email and password', async function () {
    await loginPage.login(user.username, user.password);
});

Then('they should be redirected to the SauceDemo feed', async function () {
  await expect(page).toHaveURL(process.env.BASE_URL!);
  await browser.close();
});