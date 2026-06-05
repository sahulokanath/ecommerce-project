import { Page, Locator } from '@playwright/test';
import { Logout } from './Logout';
export class MyAccountPage {

    private readonly page: Page;


    //locators
    private readonly textMyAccount: Locator;
    private readonly logout: Locator;
    private readonly homepagelink: Locator;
    constructor(page: Page) {
        this.page = page;
        this.textMyAccount = page.locator("//h2[text()='My Account']");
        this.logout = page.locator("//div[@class='list-group']//a[text()='Logout']");
        this.homepagelink = page.locator(" //ul[@class='breadcrumb']//i[@class='fa fa-home']");
    }


    async isMyAccountPageDisplayed(): Promise<boolean> {
        const title = await this.page.title();
        try {
            await this.textMyAccount.waitFor({ state: 'visible', timeout: 5000 });
            return true;
        } catch (error) {
            console.error("My Account page is not displayed:", error);
            return false;
        }
    }

    async clickHome(): Promise<void> {
        await this.homepagelink.click();
    }
    async clickLogout(): Promise<Logout> {
        await this.logout.click();
        return new Logout(this.page);
    }


}