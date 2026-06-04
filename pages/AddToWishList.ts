import {test, Locator,Page} from '@playwright/test';

export class AddToWishList {
    private readonly page: Page;
    private readonly btnAddToWishList: Locator; 

    constructor(page: Page) {   
        this.page = page;
        this.btnAddToWishList = page.locator("(//button[@type='button'])[11]");
    }   

    // Method to add a product to the wish list
    async addProductToWishList() {
        await this.btnAddToWishList.click();
    }       
    // Method to check if the success message is displayed after adding to wish list
    async isSuccessMessageDisplayed() {
        const successMessage = this.page.locator('.alert-success');
        return await successMessage.isVisible();
    }


}