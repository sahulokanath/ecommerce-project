import  { Page,Locator } from '@playwright/test';
import { HomePage } from './HomePage';
export class Logout {

    private readonly page: Page;        
    //locators
    private readonly continueButton: Locator    ;
    constructor(page: Page) {
        this.page = page;        
        this.continueButton = page.locator("//a[text()='Continue']");
    }   

    async clickContinue(): Promise<HomePage> {
        await this.continueButton.click();
        return new HomePage(this.page);
    }
    async continueButtonIsDisplayed(): Promise<boolean> {
        try {
            await this.continueButton.waitFor({ state: 'visible', timeout: 5000 });
            return true;
        } catch (error) {
            console.error("Continue button is not displayed:", error);
            return false;
        }
}

}