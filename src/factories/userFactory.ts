export interface TestUser {
  username: string;
  password: string;
}

export function createValidUser(): TestUser {
  return {
    username: process.env.TEST_USERNAME || 'standard_user',
    password: process.env.TEST_PASSWORD || 'secret_sauce'
  };
}

export function createInvalidUser(): TestUser {
  return {
    username: 'invalid_user',
    password: 'wrong_password'
  };
}