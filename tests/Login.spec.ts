import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { MyAccountPage } from '../pages/Myaccount';
import { LoginPage } from '../pages/LoginPage';
import { Logout } from '../pages/Logout';
import { TestConfig } from '../test.config';


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
    
});

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(5000); // wait for 5 seconds to see the result
    await page.close(); // close the browser after each test
});     

test('Login with valid credentials @master', async () => {

    //Navigate to login page
    await homePage.clickMyAccount();
    await homePage.clickLogin();  

    //Enter Valid credentials and login
    await loginPage.login(testConfig.email, testConfig.password);

    //Validate My account page is displayed
    const isMyAccountDisplayed = await myAccountPage.isMyAccountPageDisplayed();
    expect(isMyAccountDisplayed).toBeTruthy();

});

