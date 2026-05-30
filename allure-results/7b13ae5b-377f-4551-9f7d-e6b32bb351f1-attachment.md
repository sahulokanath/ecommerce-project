# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegister.spec.ts >> Account  Registion @master @regression @sanity
- Location: tests\AccountRegister.spec.ts:39:5

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1  | /*
  2  |  Test case: Account Registration
  3  |  Tages @smoke @regression @sanity
  4  |  Test Steps:        
  5  |     1. Navigate to the registration page.
  6  |     2. go to my account and click on register link           
  7  |     2. Fill in the registration filed randomly generated data for first name, last name, email, telephone, password, and confirm password.
  8  |     3. agree to the privacy policy and submit the registration form.
  9  |     4. Vvalidate that the account is created successfully by checking for a confirmation message or redirection to a welcome page.
  10 | 
  11 | */
  12 | 
  13 | import { test, expect } from '@playwright/test';
  14 | import { HomePage } from '../pages/HomePage';
  15 | import { RegistrationPage } from '../pages/RegistartionPage';
  16 | import { TestConfig } from '../test.config';
  17 | import { RandomDataGenerator } from '../utils/randomDataGenerator';
  18 | 
  19 | let homePage: HomePage;
  20 | let registrationPage: RegistrationPage;
  21 | let testConfig: TestConfig;
  22 | 
  23 | test.beforeEach(async ({ page }) => {
  24 |      testConfig = new TestConfig();
  25 |     await page.goto(testConfig.appUrl); // navigate to the application URL
  26 | 
  27 |      homePage = new HomePage(page);
  28 |     await homePage.clickMyAccount(); // click on my account link
  29 |     await homePage.clickRegister();// click on register link
  30 | 
  31 |     registrationPage = new RegistrationPage(page);
  32 | });
  33 | 
  34 | test.afterEach(async ({ page }) => {
> 35 |     await page.waitForTimeout(5000); // wait for 5 seconds to see the result
     |                ^ Error: page.waitForTimeout: Test ended.
  36 |     await page.close(); // close the browser after each test
  37 | });
  38 | 
  39 | test('Account  Registion @master @regression @sanity', async () => {
  40 | 
  41 |     await homePage.isHomePageDisplayed(); // validate home page is displayed
  42 |     await homePage.clickMyAccount(); // click on my account link
  43 |     await homePage.clickRegister();// click on register link
  44 | 
  45 |     await registrationPage.enterFirstName(RandomDataGenerator.generateRandomFirstName());
  46 |     await registrationPage.enterLastName(RandomDataGenerator.generateRandomLastName());
  47 |     await registrationPage.enterEmail(RandomDataGenerator.generateRandomEmail());
  48 |     await registrationPage.enterTelephone(RandomDataGenerator.generateRandomPhoneNumber());
  49 |     const password = RandomDataGenerator.generateRandomPassword(12);
  50 | 
  51 |     // Two passwords should be the same for registration
  52 |     await registrationPage.enterPassword(password);
  53 |     await registrationPage.enterConfirmPassword(password);
  54 | 
  55 |     await registrationPage.clickPrivacyPolicy();
  56 |     await registrationPage.clickContinue();
  57 | 
  58 |     const confirmation = await registrationPage.getConformationMsg();
  59 |     await expect(confirmation).toContain('Your Account Has Been Created!');
  60 | 
  61 | 
  62 | });
```