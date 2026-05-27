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

test('User  Registration', async ({ page }) => {  

}