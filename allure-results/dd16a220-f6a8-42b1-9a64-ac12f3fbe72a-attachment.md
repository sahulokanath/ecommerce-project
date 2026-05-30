# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> Login with valid credentials @master
- Location: tests\Login.spec.ts:31:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('a[title=\'Login\']')

```

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import { HomePage } from '../pages/HomePage';
  3  | import { MyAccountPage } from '../pages/Myaccount';
  4  | import { LoginPage } from '../pages/LoginPage';
  5  | import { Logout } from '../pages/Logout';
  6  | import { TestConfig } from '../test.config';
  7  | 
  8  | 
  9  | let homePage: HomePage; 
  10 | let myAccountPage: MyAccountPage;
  11 | let loginPage: LoginPage;
  12 | let logout: Logout;
  13 | let testConfig: TestConfig; 
  14 | 
  15 | test.beforeEach(async ({ page }) => {
  16 |     testConfig = new TestConfig();
  17 |     await page.goto(testConfig.appUrl); // navigate to the application URL  
  18 | 
  19 | 
  20 |     homePage = new HomePage(page);
  21 |     loginPage = new LoginPage(page);
  22 |     myAccountPage = new MyAccountPage(page);
  23 |     
  24 | });
  25 | 
  26 | test.afterEach(async ({ page }) => {
> 27 |     await page.waitForTimeout(5000); // wait for 5 seconds to see the result
     |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  28 |     await page.close(); // close the browser after each test
  29 | });     
  30 | 
  31 | test('Login with valid credentials @master', async () => {
  32 | 
  33 |     //Navigate to login page
  34 |     await homePage.clickMyAccount();
  35 |     await homePage.clickLogin();  
  36 | 
  37 |     //Enter Valid credentials and login
  38 |     await loginPage.login(testConfig.email, testConfig.password);
  39 | 
  40 |     //Validate My account page is displayed
  41 |     const isMyAccountDisplayed = await myAccountPage.isMyAccountPageDisplayed();
  42 |     expect(isMyAccountDisplayed).toBeTruthy();
  43 | 
  44 | });
  45 | 
  46 | 
```