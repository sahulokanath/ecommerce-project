/*
 Test case: Account Registration
 Tages @smoke @regression @sanity
 Test Steps:        
    1. Navigate to the registration page.
    2. go to my account and click on register link           
    2. Fill in the registration filed randomly generated data for first name, last name, email, telephone, password, and confirm password.
    3. agree to the privacy policy and submit the registration form.
    4. Vvalidate that the account is created successfully by checking for a confirmation message or redirection to a welcome page.

*/

import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistartionPage';
import { TestConfig } from '../test.config';
import { RandomDataGenerator } from '../utils/randomDataGenerator';

test('Account  Registion', async ({ page }) => {

    const testConfig = new TestConfig();

    await page.goto(testConfig.appUrl); // navigate to the application URL

    const homePage = new HomePage(page);
    await homePage.clickMyAccount(); // click on my account link
    await homePage.clickRegister();// click on register link

    const registrationPage = new RegistrationPage(page);

    await registrationPage.enterFirstName(RandomDataGenerator.generateRandomFirstName());
    await registrationPage.enterLastName(RandomDataGenerator.generateRandomLastName());
    await registrationPage.enterEmail(RandomDataGenerator.generateRandomEmail());
    await registrationPage.enterTelephone(RandomDataGenerator.generateRandomPhoneNumber());
    const password = RandomDataGenerator.generateRandomPassword(12);

    // Two passwords should be the same for registration
    await registrationPage.enterPassword(password);
    await registrationPage.enterConfirmPassword(password);

    await registrationPage.clickPrivacyPolicy();
    await registrationPage.clickContinue();

    const confirmation = await registrationPage.getConformationMsg();
    await expect(confirmation).toContain('Your Account Has Been Created!');

    await page.waitForTimeout(5000); // wait for 5 seconds to see the result
});