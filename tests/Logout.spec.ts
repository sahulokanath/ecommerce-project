import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { MyAccountPage } from "../pages/Myaccount";
import { LoginPage } from "../pages/LoginPage";
import { TestConfig } from "../test.config";
import { DataProvider } from "../utils/dataProvider";
import { Logout } from "../pages/Logout";

let homePage: HomePage;
let myAccountPage: MyAccountPage;
let loginPage: LoginPage;
let logout: Logout;
let testConfig: TestConfig;

test.beforeEach(async ({ page }) => {
    testConfig = new TestConfig();
    await page.goto(testConfig.appUrl); // navigate to the application URL      

    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    myAccountPage = new MyAccountPage(page);
    logout = new Logout(page);
});

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(5000); // wait for 5 seconds to see the result
    await page.close(); // close the browser after each test
});

test('Logout functionality @master @regression', async () => {

    //Navigate to login page
    await homePage.clickMyAccount();
    await homePage.clickLogin();

    //Enter Valid credentials and login
    await loginPage.login(testConfig.email, testConfig.password);
    //Validate My account page is displayed 
    const isMyAccountDisplayed = await myAccountPage.isMyAccountPageDisplayed();
    expect(isMyAccountDisplayed).toBeTruthy();
    //Click on logout link
    await myAccountPage.clickLogout();
    //Validate logout is successful and home page is displayed
    const isContinueButtonDisplayed = await logout.continueButtonIsDisplayed();
    expect(isContinueButtonDisplayed).toBeTruthy();
});