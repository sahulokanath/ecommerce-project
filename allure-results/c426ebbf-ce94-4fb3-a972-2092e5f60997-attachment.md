# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddTowishList.spec.ts >> Add product to wish list @master
- Location: tests\AddTowishList.spec.ts:33:5

# Error details

```
Error: locator.textContent: Error: strict mode violation: locator('//a[contains(text(),\'iPhone\')]') resolved to 2 elements:
    1) <a href="https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=40">iPhone</a> aka getByRole('link', { name: 'iPhone' }).first()
    2) <a href="https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=40">iPhone</a> aka locator('#content').getByText('iPhone', { exact: true })

Call log:
  - waiting for locator('//a[contains(text(),\'iPhone\')]')

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
  8  |     private readonly msgSuccess: Locator;
  9  |     constructor(page: Page) {   
  10 |         this.page = page;
  11 |         this.btnAddToWishList = page.locator("(//button[@type='button'])[11]");
  12 |         this.btnWishList = page.locator('(//button[@data-original-title="Add to Wish List"])[2]');
  13 |         this.produName =  page.locator("//a[contains(text(),'iPhone')]");
  14 |         this.msgSuccess = page.locator("//div[contains(@class,'alert-success')]");
  15 |     }   
  16 | 
  17 |     // Method to add a product to the wish list
  18 |     async addProductToWishList() {
  19 |         await this.btnAddToWishList.click();
  20 |     }     
  21 |     
  22 |     async wishListClick(): Promise<void> {   
  23 |         await this.btnWishList.click();
  24 |     }   
  25 | 
  26 |     async productName(): Promise<string> {
> 27 |         return await this.produName.textContent() || '';
     |                                     ^ Error: locator.textContent: Error: strict mode violation: locator('//a[contains(text(),\'iPhone\')]') resolved to 2 elements:
  28 |     }
  29 | 
  30 |     async successMessage(): Promise<string> {
  31 |         return await this.msgSuccess.textContent() || '';
  32 |     }
  33 |  
  34 | 
  35 | }
```