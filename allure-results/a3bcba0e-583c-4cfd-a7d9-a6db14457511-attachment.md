# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddTowishList.spec.ts >> Add product to wish list @master
- Location: tests\AddTowishList.spec.ts:30:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import { expect } from "@playwright/test";     
  2  | import { test } from "@playwright/test";
  3  | import { HomePage } from "../pages/HomePage";
  4  | import { MyAccountPage } from "../pages/Myaccount";     
  5  | import { LoginPage } from "../pages/LoginPage";
  6  | import { Logout } from "../pages/Logout";
  7  | import { TestConfig } from "../test.config";
  8  | import { AddToWishList } from "../pages/AddToWishList";
  9  | 
  10 | let homePage: HomePage;
  11 | let myAccountPage: MyAccountPage;   
  12 | let loginPage: LoginPage;
  13 | let logout: Logout;
  14 | let testConfig: TestConfig;
  15 | let addToWishList: AddToWishList;   
  16 | test.beforeEach(async ({ page }) => {
  17 |     testConfig = new TestConfig();
  18 |     await page.goto(testConfig.appUrl); // navigate to the application URL  
  19 |     homePage = new HomePage(page);
  20 |     loginPage = new LoginPage(page);
  21 |     myAccountPage = new MyAccountPage(page);
  22 |     addToWishList = new AddToWishList(page);
  23 | }); 
  24 | 
  25 | test.afterEach(async ({ page }) => {
  26 |     await page.waitForTimeout(5000);        
  27 |     await page.close(); // close the browser after each test
  28 | });
  29 | 
  30 | test('Add product to wish list @master', async () => {
  31 |     // Navigate to login page
  32 |     await homePage.clickMyAccount();
  33 |     await homePage.clickLogin();        
  34 |     // Enter valid credentials and login
  35 |     await loginPage.login(testConfig.email, testConfig.password);
  36 |     // Validate My account page is displayed
  37 |     const isMyAccountDisplayed = await myAccountPage.isMyAccountPageDisplayed();
  38 |      expect(isMyAccountDisplayed).toBeTruthy();  
  39 |      
  40 |      //clikc home page link
  41 |         await myAccountPage.clickHome();
  42 |     // Add product to wish list
  43 |     await addToWishList.addProductToWishList(); 
  44 |     // Validate success message is displayed
  45 |     const isSuccessMessageDisplayed = await addToWishList.isSuccessMessageDisplayed();
> 46 |     expect(isSuccessMessageDisplayed).toBeTruthy();     
     |                                       ^ Error: expect(received).toBeTruthy()
  47 | });
```