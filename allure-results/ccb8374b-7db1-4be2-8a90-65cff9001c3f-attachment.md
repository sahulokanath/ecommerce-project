# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> Login with valid credentials @master
- Location: tests\Login.spec.ts:31:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('a[title=\'Login\']')

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class HomePage {
  4  | 
  5  |     private readonly page: Page;
  6  |     private readonly lnkMyAccount: Locator;
  7  |     private readonly lnkLogin: Locator;
  8  |     private readonly lnkRegister: Locator;
  9  |     private readonly textSearchBox: Locator;
  10 |     private readonly btnSearch: Locator;
  11 | 
  12 |     constructor(page: Page) {
  13 |         this.page = page;
  14 | 
  15 |         this.lnkMyAccount = page.locator("a[title='My Account']");
  16 |         this.lnkLogin = page.locator("a[title='Login']");
  17 |         this.lnkRegister = page.locator("//ul[@class='dropdown-menu dropdown-menu-right']//a[text()='Register']");
  18 |         this.textSearchBox = page.locator("input[name='search']");
  19 |         this.btnSearch = page.locator("button[class='btn btn-default btn-lg']");
  20 |     }
  21 | 
  22 |     async isHomePageDisplayed(): Promise<boolean> {
  23 |         const title = await this.page.title();
  24 |         return !!title;
  25 |     }
  26 | 
  27 |     async clickMyAccount(): Promise<void> {
  28 |         await this.lnkMyAccount.click();
  29 |     }
  30 | 
  31 |     async clickLogin(): Promise<void> {
> 32 |         await this.lnkLogin.click();
     |                             ^ Error: locator.click: Target page, context or browser has been closed
  33 |     }
  34 | 
  35 |     async clickRegister(): Promise<void> {
  36 |         await this.lnkRegister.click();
  37 |     }
  38 | 
  39 |     // Search product in one method
  40 |     async searchProduct(productName: string): Promise<void> {
  41 |         await this.textSearchBox.fill(productName);
  42 |         await this.btnSearch.click();
  43 |     }
  44 | 
  45 |     // Enter search text only
  46 |     async enterSearchTerm(productName: string): Promise<void> {
  47 |         await this.textSearchBox.fill(productName);
  48 |     }
  49 | 
  50 |     // Click search button only
  51 |     async clickSearchButton(): Promise<void> {
  52 |         await this.btnSearch.click();
  53 |     }
  54 | 
  55 |     // Get search button text
  56 |     async getSearchButtonText(): Promise<string> {
  57 |         return (await this.btnSearch.textContent()) || '';
  58 |     }
  59 | 
  60 |     // Get page title
  61 |     async getPageTitle(): Promise<string> {
  62 |         return await this.page.title();
  63 |     }
  64 | }
```