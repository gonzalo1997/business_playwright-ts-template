import { test, expect } from '@playwright/test';

test('GET posts from JSONPlaceholder', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts');

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(Array.isArray(body)).toBeTruthy();
  expect(body[0]).toHaveProperty('id');
  expect(body[0]).toHaveProperty('title');
});