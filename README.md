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
```

### 3. Real Credentials (future use)
When you want to run tests against your own app:
- Create a local `.env` file (never commit it to GitHub).
- Add your real credentials:
  ```
  BASE_URL=https://your-app.com/
  USERNAME=your_real_email
  PASSWORD=your_real_password
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

### 5. Reports
Playwright generates HTML reports automatically:
```
npx playwright test --reporter=html
```
