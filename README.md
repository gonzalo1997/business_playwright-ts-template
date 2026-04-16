# Playwright TypeScript Automation Template

A reusable starter kit for **UI and API automation** using [Playwright](https://playwright.dev/) and **TypeScript**.  
This template is designed to be **plug-and-play**, with examples for helpers, page objects, factories, UI tests, and API tests.

---

### 1. Clone the repository (replace the username and repositoryName)

```
git clone https://github.com/((username))/((repositoryName)).git
cd ((repositoryName))
```

### 2. Install dependencies
```
npm init -y
npm install -D @playwright/test typescript ts-node eslint prettier
npm install dotenv @faker-js/faker
npx playwright install
npm install --save-dev @types/node
npm install --save-dev @cucumber/cucumber ts-node
```

### 3. Real Credentials (future use)
When you want to run tests against your own app:
- Create a local `.env` file (never commit it to GitHub).
- Replace the values with your own url that you want to automate and your real credentials:
  ```
  BASE_URL=https://www.saucedemo.com/
  TEST_USERNAME=standard_user
  TEST_PASSWORD=secret_sauce
  ```

### 4. Run tests
###    - Run all tests:
```
npx playwright test
```
###    - Run only UI tests:
```
npx playwright test tests/ui
```
###    - Run only API tests:
```
npx playwright test tests/api
```

###    - Run all BDD tests:
```
npm run test:bdd
```

### 5. Reports
Playwright generates HTML reports automatically:
```
npx playwright test --reporter=html
```

*Note¨: There are minor errors, loginHelper is redundant, since LoginPage already exists and the login feature is failing because the url is set to be verified with a traditional ui playwright test, not a bdd test yet.
