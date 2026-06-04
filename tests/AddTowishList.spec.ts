import { expect } from "@playwright/test";     
import { test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { MyAccountPage } from "../pages/Myaccount";     
import { LoginPage } from "../pages/LoginPage";
import { Logout } from "../pages/Logout";
import { TestConfig } from "../test.config";
import { AddToWishList } from "../pages/AddToWishList";

let homePage: HomePage;
let myAccountPage: MyAccountPage;   
let loginPage: LoginPage;
let logout: Logout;
let testConfig: TestConfig;
let addToWishList: AddToWishList;   
test.beforeEach(async ({ page }) => {
    testConfig = new TestConfig();
    await page.goto(testConfig.appUrl); // navigate to the application URL  
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    myAccountPage = new MyAccountPage(page);
    addToWishList = new AddToWishList(page);
}); 

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(5000);        
    await page.close(); // close the browser after each test
});

test('Add product to wish list @master', async () => {
    // Navigate to login page
    await homePage.clickMyAccount();
    await homePage.clickLogin();        
    // Enter valid credentials and login
    await loginPage.login(testConfig.email, testConfig.password);
    // Validate My account page is displayed
    const isMyAccountDisplayed = await myAccountPage.isMyAccountPageDisplayed();
     expect(isMyAccountDisplayed).toBeTruthy();          
    // Add product to wish list
    await addToWishList.addProductToWishList(); 
    // Validate success message is displayed
    const isSuccessMessageDisplayed = await addToWishList.isSuccessMessageDisplayed();
    expect(isSuccessMessageDisplayed).toBeTruthy();     
});