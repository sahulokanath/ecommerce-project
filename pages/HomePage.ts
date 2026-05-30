import { Page, test, expect, Locator } from '@playwright/test';

export class HomePage {

    // Locators
    private readonly page: Page;
    private readonly lnkMyAccount: Locator;
    private readonly lnkLogin: Locator;
    private readonly lnkRegister: Locator;
    private readonly textSearchBox: Locator;
    private readonly btnSearch: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;

        this.lnkMyAccount = page.locator("a[title='My Account']");
        this.lnkLogin = page.locator("//ul[@class='dropdown-menu dropdown-menu-right']//a[text()='Login']");
        this.lnkRegister = page.locator("//ul[@class='dropdown-menu dropdown-menu-right']//a[text()='Register']");
        this.textSearchBox = page.locator("input[name='search']");
        this.btnSearch = page.locator("button[class='btn btn-default btn-lg']");
    }

    // Verify home page
    async isHomePageDisplayed(): Promise<boolean> {
        const title = await this.page.title();

        if (title) {
            return true;
        }
        return false;
    }

    // Click My Account
    async clickMyAccount(): Promise<void> {
        try {
            await this.lnkMyAccount.click();
        } catch (error) {
            console.error("Error clicking My Account link:", error);
            throw error;
        }
    }

    // Click Login
    async clickLogin(): Promise<void> {
        try {
            await this.lnkLogin.click();
        } catch (error) {
            console.error("Error clicking Login link:", error);
            throw error;
        }
    }

    // Click Register
    async clickRegister(): Promise<void> {
        try {
            await this.lnkRegister.click();
        } catch (error) {
            console.error("Error clicking Register link:", error);
            throw error;
        }
    }

    // Search Product
    async searchProduct(productName: string): Promise<void> {
        try {
            await this.textSearchBox.fill(productName);
            await this.btnSearch.click();
        } catch (error) {
            console.error("Error searching for product:", error);
            throw error;
        }
    }

    // Enter Search Term
    async enterSearchTerm(productName: string): Promise<void> {
        await this.textSearchBox.fill(productName);
    }

    // Click Search Button
    async clickSearchButton(): Promise<void> {
        await this.btnSearch.click();
    }

    // Get Search Button Text
    async getSearchButtonText(): Promise<string> {
        return (await this.btnSearch.textContent()) || '';
    }

    // Get Page Title
    async getPageTitle(): Promise<string> {
        try {
            return await this.page.title();
        } catch (error) {
            console.error("Error getting page title:", error);
            throw error;
        }
    }
}