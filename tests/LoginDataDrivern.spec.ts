import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { MyAccountPage } from "../pages/Myaccount";
import { LoginPage } from "../pages/LoginPage";
import { TestConfig } from "../test.config";
import { DataProvider } from "../utils/dataProvider";

// Load JSON data
const jsonPath = "./testsData/loginData.json";
const loginData = DataProvider.getTestDataFromJson(jsonPath);

console.log("Loaded Data:", loginData);

for (const data of loginData) {

    test(`${data.testName} @datadriven`, async ({ page }) => {

        const testConfig = new TestConfig();
        await page.goto(testConfig.appUrl);

        const homePage = new HomePage(page);
        await homePage.clickMyAccount();
        await homePage.clickLogin();

        const loginPage = new LoginPage(page);

        await loginPage.login(data.email, data.password);

        if (data.expected.toLowerCase() === "success") {

            const myAccountPage = new MyAccountPage(page);

            expect(
                await myAccountPage.isMyAccountPageDisplayed()
            ).toBeTruthy();

        } else {

            const errorMsg = await loginPage.getErrorMsg();

            expect(errorMsg).toContain(
                "Warning: No match for E-Mail Address and/or Password."
            );
        }
    });
}


/* CSV Data Read
const csvPath = "./testsData/loginDataCSV.csv";
const logincsvData = DataProvider.getUserDataFromCSV(csvPath);

console.log("Loaded Data:", logincsvData);

for (const data of logincsvData) {

    test(`${data.testName} @datadriven`, async ({ page }) => {

        const testConfig = new TestConfig();
        await page.goto(testConfig.appUrl);

        const homePage = new HomePage(page);
        await homePage.clickMyAccount();
        await homePage.clickLogin();

        const loginPage = new LoginPage(page);

        // CSV header is "password"
        await loginPage.login(data.email, data.password);

        if (data.expected.toLowerCase() === "success") {

            const myAccountPage = new MyAccountPage(page);

            expect(
                await myAccountPage.isMyAccountPageDisplayed()
            ).toBeTruthy();

        } else {

            const errorMsg = await loginPage.getErrorMsg();

            expect(errorMsg).toContain(
                "Warning: No match for E-Mail Address and/or Password."
            );
        }
    });
}

*/