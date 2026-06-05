# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddTowishList.spec.ts >> Add product to wish list @master
- Location: tests\AddTowishList.spec.ts:33:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
Call log:
  - waiting for locator('//div[contains(@class,\'alert-success\')]') to be visible

```

# Test source

```ts
  1  | import { test, Locator, Page } from '@playwright/test';
  2  | 
  3  | export class AddToWishList {
  4  |     private readonly page: Page;
  5  |     private readonly btnAddToWishList: Locator;
  6  |     private readonly btnWishList: Locator;
  7  |     private readonly produName: Locator;
  8  |     private readonly msgSuccess: Locator;
  9  |     constructor(page: Page) {
  10 |         this.page = page;
  11 |         this.btnAddToWishList = page.locator("//div[contains(@class,'product-thumb')][.//a[text()='iPhone']]//button[@data-original-title='Add to Wish List']");
  12 |         this.btnWishList = page.locator("#wishlist-total");
  13 |         this.produName = page.locator("//table[contains(@class,'table')]//tbody//a[text()='iPhone']");
  14 |         this.msgSuccess = page.locator("//div[contains(@class,'alert-success')]");
  15 |     }
  16 | 
  17 |     // Method to add a product to the wish list
  18 | 
  19 |     async wishListClick(): Promise<void> {
  20 |         await this.btnWishList.click();
  21 |     }
  22 |     async addProductToWishList() {
  23 |         await this.btnAddToWishList.click();
  24 |     }
  25 | 
  26 |     async productName(): Promise<string> {
  27 |         await this.produName.waitFor({ state: 'visible', timeout: 5000 });
  28 |         return await this.produName.textContent() || '';
  29 |     }
  30 | 
  31 |     async successMessage(): Promise<string> {
> 32 |         await this.msgSuccess.waitFor({ state: 'visible', timeout: 5000 });
     |                               ^ TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
  33 |         return await this.msgSuccess.textContent() || '';
  34 |     }
  35 | 
  36 | 
  37 | }
```