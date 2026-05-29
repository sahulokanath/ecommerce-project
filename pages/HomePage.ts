import { Page, test, expect, Locator } from '@playwright/test';

export class HomePage {

    //locators

    private readonly page: Page;
    private readonly lnkMyAccount: Locator;
    private readonly lnkLogin: Locator;
    private readonly lnkRegister: Locator;
    private readonly textSearchBox: Locator;
    private readonly btnSearch: Locator;


    //coonstrutor --> initilize the locater in to the variables

    constructor(page: Page) {
        this.page = page;
        this.lnkMyAccount = page.locator("a[title='My Account']");
        this.lnkLogin = page.locator("a[title='Login']");
        this.lnkRegister = page.locator("//ul[@class='dropdown-menu dropdown-menu-right']//a[text()='Register']");
        this.textSearchBox = page.locator("input[name='search']");
        this.btnSearch = page.locator("button[class='btn btn-default btn-lg']");
    }

    //action methods
    //page is exist or not

    async isHomePageDisplayed() {
        const title = await this.page.title();

        if (title) {

            return true;
        }
        return false;
    }

    //click on my account link
    async clickMyAccount() {

        try {
            await this.lnkMyAccount.click();
        } catch (error) {
            console.error("Error clicking My Account link:", error);
            throw error; // Rethrow the error after logging it
        }
    }

    //click on login link
    async clickLogin() {
        try {
            await this.lnkLogin.click();
        } catch (error) {
            console.error("Error clicking Login link:", error);
            throw error; // Rethrow the error after logging it
        }
    }

    //click on register link
    async clickRegister() {
        try {
            await this.lnkRegister.click();
        } catch (error) {
            console.error("Error clicking Register link:", error);
            throw error; // Rethrow the error after logging it
        }
    }

    //search for the product
    async searchProduct(productName: string) {
        try {
            await this.textSearchBox.fill(productName);
            await this.btnSearch.click();
        } catch (error) {
            console.error("Error searching for product:", error);
            throw error; // Rethrow the error after logging it
        }
    }

    //get sech but
    async getSearchButtonText() {
        try {
             await this.btnSearch.click();          
        } catch (error) {
            console.error("Error getting search button text:", error);
            throw error; // Rethrow the error after logging it
        }           
    }

    //get the page title
    async getPageTitle() {
        try {
            return await this.page.title();
        } catch (error) {
            console.error("Error getting page title:", error);
            throw error; // Rethrow the error after logging it
        }
    }

}