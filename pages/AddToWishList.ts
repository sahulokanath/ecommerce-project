import { test, Locator, Page } from '@playwright/test';

export class AddToWishList {
    private readonly page: Page;
    private readonly btnAddToWishList: Locator;
    private readonly btnWishList: Locator;
    private readonly produName: Locator;
    private readonly msgSuccess: Locator;
    constructor(page: Page) {
        this.page = page;
        this.btnAddToWishList = page.locator("//div[contains(@class,'product-thumb')][.//a[text()='iPhone']]//button[@data-original-title='Add to Wish List']");
        this.btnWishList = page.locator("#wishlist-total");
        this.produName = page.locator("//table[contains(@class,'table')]//tbody//a[text()='iPhone']");
        this.msgSuccess = page.locator("//div[contains(@class,'alert-success')]");
    }

    // Method to add a product to the wish list

    async wishListClick(): Promise<void> {
        await this.btnWishList.click();
    }
    async addProductToWishList() {
        await this.btnAddToWishList.click();
    }

    async productName(): Promise<string> {
        await this.produName.waitFor({ state: 'visible', timeout: 5000 });
        return await this.produName.textContent() || '';
    }

    async successMessage(): Promise<string> {
        await this.msgSuccess.waitFor({ state: 'visible', timeout: 5000 });
        return await this.msgSuccess.textContent() || '';
    }


}