import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 1,
  reporter: [
    ['list'], // progress in console
    ['html', { outputFolder: 'playwright-report', open: 'never' }], // HTML report
    ['json', { outputFile: 'results.json' }], // export results in JSON
    ['junit', { outputFile: 'results.xml' }] // useful for CI/CD pipelines
  ],
  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry', // generate traces for debugging
    screenshot: 'only-on-failure', // capture screenshots on failures
    video: 'retain-on-failure', // keep videos on failures
    headless: true, // run browser in headless mode
  },
});
