# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddTowishList.spec.ts >> Add product to wish list @master
- Location: tests\AddTowishList.spec.ts:30:5

# Error details

```
Error: locator.textContent: Error: strict mode violation: getByRole('link', { name: 'iPhone' }) resolved to 2 elements:
    1) <a href="https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=40">…</a> aka getByRole('link', { name: 'iPhone' }).first()
    2) <a href="https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=40">iPhone</a> aka getByText('iPhone')

Call log:
  - waiting for getByRole('link', { name: 'iPhone' })

```

# Test source

```ts
  1  | import {test, Locator,Page} from '@playwright/test';
  2  | 
  3  | export class AddToWishList {
  4  |     private readonly page: Page;
  5  |     private readonly btnAddToWishList: Locator; 
  6  |     private readonly btnWishList:Locator;
  7  |     private readonly produName:Locator;
  8  | 
  9  |     constructor(page: Page) {   
  10 |         this.page = page;
  11 |         this.btnAddToWishList = page.locator("(//button[@type='button'])[11]");
  12 |         this.btnWishList =page.locator("//span[contains(text(),'Wish List')]");
  13 |         this.produName =  page.getByRole('link', { name: 'iPhone' })
  14 |     }   
  15 | 
  16 |     // Method to add a product to the wish list
  17 |     async addProductToWishList() {
  18 |         await this.btnAddToWishList.click();
  19 |     }     
  20 |     
  21 |     async wishList(): Promise<void> {   
  22 |         await this.btnWishList.click();
  23 |     }   
  24 | 
  25 |     async productName(): Promise<string> {
> 26 |         return await this.produName.textContent() || '';
     |                                     ^ Error: locator.textContent: Error: strict mode violation: getByRole('link', { name: 'iPhone' }) resolved to 2 elements:
  27 |     }
  28 |  
  29 | 
  30 | }
```