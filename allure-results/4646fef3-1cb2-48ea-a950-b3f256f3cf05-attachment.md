# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddTowishList.spec.ts >> Add product to wish list @master
- Location: tests\AddTowishList.spec.ts:30:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('//button[@data-original-title="Add to Wish List"]') resolved to 4 elements:
    1) <button title="" type="button" data-toggle="tooltip" onclick="wishlist.add('43');" data-original-title="Add to Wish List">…</button> aka getByRole('button').nth(4)
    2) <button title="" type="button" data-toggle="tooltip" onclick="wishlist.add('40');" aria-describedby="tooltip769561" data-original-title="Add to Wish List">…</button> aka getByRole('button', { description: 'Add to Wish List', exact: true })
    3) <button title="" type="button" data-toggle="tooltip" onclick="wishlist.add('42');" data-original-title="Add to Wish List">…</button> aka getByRole('button').filter({ hasText: /^$/ }).nth(5)
    4) <button title="" type="button" data-toggle="tooltip" onclick="wishlist.add('30');" data-original-title="Add to Wish List">…</button> aka locator('div:nth-child(4) > .product-thumb > .button-group > button:nth-child(2)')

Call log:
  - waiting for locator('//button[@data-original-title="Add to Wish List"]')

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
  12 |         this.btnWishList = page.locator('//button[@data-original-title="Add to Wish List"]');
  13 |         this.produName =  page.locator("//a[contains(text(),'iPhone')]");
  14 |         this.msgSuccess = page.locator("//div[contains(@class,'alert-success')]");
  15 |     }   
  16 | 
  17 |     // Method to add a product to the wish list
  18 |     async addProductToWishList() {
  19 |         await this.btnAddToWishList.click();
  20 |     }     
  21 |     
  22 |     async wishList(): Promise<void> {   
> 23 |         await this.btnWishList.click();
     |                                ^ Error: locator.click: Error: strict mode violation: locator('//button[@data-original-title="Add to Wish List"]') resolved to 4 elements:
  24 |     }   
  25 | 
  26 |     async productName(): Promise<string> {
  27 |         return await this.produName.textContent() || '';
  28 |     }
  29 | 
  30 |     async successMessage(): Promise<string> {
  31 |         return await this.msgSuccess.textContent() || '';
  32 |     }
  33 |  
  34 | 
  35 | }
```