# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddTowishList.spec.ts >> Add product to wish list @master
- Location: tests\AddTowishList.spec.ts:30:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('xpath=(//button[@type=\'button\'])[11]')

```

# Test source

```ts
  1  | import {test, Locator,Page} from '@playwright/test';
  2  | 
  3  | export class AddToWishList {
  4  |     private readonly page: Page;
  5  |     private readonly btnAddToWishList: Locator; 
  6  | 
  7  |     constructor(page: Page) {   
  8  |         this.page = page;
  9  |         this.btnAddToWishList = page.locator("(//button[@type='button'])[11]");
  10 |     }   
  11 | 
  12 |     // Method to add a product to the wish list
  13 |     async addProductToWishList() {
> 14 |         await this.btnAddToWishList.click();
     |                                     ^ Error: locator.click: Target page, context or browser has been closed
  15 |     }       
  16 |     // Method to check if the success message is displayed after adding to wish list
  17 |     async isSuccessMessageDisplayed() {
  18 |         const successMessage = this.page.locator('.alert-success');
  19 |         return await successMessage.isVisible();
  20 |     }
  21 | 
  22 | 
  23 | }
```