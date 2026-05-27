import { Page, test, expect, Locator } from '@playwright/test';
export class RegistrationPage {

    //locators      

    private readonly page: Page;
    private readonly textFirstName: Locator;
    private readonly textLastName: Locator
    private readonly textEmail: Locator;
    private readonly textTelephone: Locator;
    private readonly textPassword: Locator;
    private readonly textConfirmPassword: Locator;
    private readonly chkPrivacyPolicy: Locator;
    private readonly btnContinue: Locator;
    private readonly msgConformation: Locator;

    //coonstrutor --> initilize the locater in to the variables

    constructor(page: Page) {
        this.page = page;
        this.textFirstName = page.locator("input[name='firstname']");
        this.textLastName = page.locator("input[name='lastname']");
        this.textEmail = page.locator("input[name='email']");
        this.textTelephone = page.locator("input[name='telephone']");
        this.textPassword = page.locator("input[name='password']");
        this.textConfirmPassword = page.locator("input[name='confirm']");
        this.chkPrivacyPolicy = page.locator("input[name='agree']");
        this.btnContinue = page.locator("button[type='submit']");
        this.msgConformation = page.locator("//h1[text()='Your Account Has Been Created!']");
    }


    //action methods
    /*
    set the first name in the registration page
     @param  fname -first name enter
    */
    async enterFirstName(firstName: string): Promise<void> {
        await this.textFirstName.fill(firstName);
    }

    async enterLastName(lastName: string): Promise<void> {
        await this.textLastName.fill(lastName);
    }

    async enterEmail(email: string): Promise<void> {
        await this.textEmail.fill(email);
    }
    async enterTelephone(telephone: string): Promise<void> {
        await this.textTelephone.fill(telephone);
    }
    async enterPassword(password: string): Promise<void> {
        await this.textPassword.fill(password);
    }
    async enterConfirmPassword(confirmPassword: string): Promise<void> {
        await this.textConfirmPassword.fill(confirmPassword);
    }
    async clickPrivacyPolicy(): Promise<void> {
        await this.chkPrivacyPolicy.check();
    }
    async clickContinue(): Promise<void> {
        await this.btnContinue.click();
    }
    async getConformationMsg(): Promise<string> {
        return await this.msgConformation.textContent() ?? '';
    }
    async isRegistrationSuccessfull(): Promise<boolean> {
        const msg = await this.getConformationMsg();
        if (msg === "Your Account Has Been Created!") {
            return true;
        }
        return false;
    }
    async isPrivacyPolicyChecked(): Promise<boolean> {
        return await this.chkPrivacyPolicy.isChecked();
    }

    //Complete the registration process

    async completeRegition(userdata: {
        firstName: string; lastName:
        string; email:
        string; telephone:
        string; password: string
    }): Promise<void> {
        await this.enterFirstName(userdata.firstName);
        await this.enterLastName(userdata.lastName);
        await this.enterEmail(userdata.email);
        await this.enterTelephone(userdata.telephone);
        await this.enterPassword(userdata.password);
        await this.enterConfirmPassword(userdata.password);
        await this.clickPrivacyPolicy();
        await this.clickContinue();
    }

}
