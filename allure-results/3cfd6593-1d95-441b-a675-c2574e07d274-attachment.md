# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddTowishList.spec.ts >> Add product to wish list @master
- Location: tests\AddTowishList.spec.ts:33:5

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Test source

```ts
  1  | import { Page, test, expect, Locator } from '@playwright/test';
  2  | 
  3  | export class HomePage {
  4  | 
  5  |     // Locators
  6  |     private readonly page: Page;
  7  |     private readonly lnkMyAccount: Locator;
  8  |     private readonly lnkLogin: Locator;
  9  |     private readonly lnkRegister: Locator;
  10 |     private readonly textSearchBox: Locator;
  11 |     private readonly btnSearch: Locator;
  12 | 
  13 |     // Constructor
  14 |     constructor(page: Page) {
  15 |         this.page = page;
  16 | 
  17 |         this.lnkMyAccount = page.locator("a[title='My Account']");
  18 |         this.lnkLogin = page.locator("//ul[@class='dropdown-menu dropdown-menu-right']//a[text()='Login']");
  19 |         this.lnkRegister = page.locator("//ul[@class='dropdown-menu dropdown-menu-right']//a[text()='Register']");
  20 |         this.textSearchBox = page.locator("input[name='search']");
  21 |         this.btnSearch = page.locator("button[class='btn btn-default btn-lg']");
  22 |     }
  23 | 
  24 |     // Verify home page
  25 |     async isHomePageDisplayed(): Promise<boolean> {
  26 |         const title = await this.page.title();
  27 | 
  28 |         if (title) {
  29 |             return true;
  30 |         }
  31 |         return false;
  32 |     }
  33 | 
  34 |     // Click My Account
  35 |     async clickMyAccount(): Promise<void> {
  36 |         try {
  37 |             await this.lnkMyAccount.click();
  38 |         } catch (error) {
  39 |             console.error("Error clicking My Account link:", error);
  40 |             throw error;
  41 |         }
  42 |     }
  43 | 
  44 |     // Click Login
  45 |     async clickLogin(): Promise<void> {
  46 |         try {
  47 |             await this.lnkLogin.click();
  48 |         } catch (error) {
  49 |             console.error("Error clicking Login link:", error);
  50 |             throw error;
  51 |         }
  52 |     }
  53 | 
  54 |     // Click Register
  55 |     async clickRegister(): Promise<void> {
  56 |         try {
  57 |             await this.lnkRegister.click();
  58 |         } catch (error) {
  59 |             console.error("Error clicking Register link:", error);
  60 |             throw error;
  61 |         }
  62 |     }
  63 | 
  64 |     // Search Product
  65 |     async searchProduct(productName: string): Promise<void> {
  66 |         try {
  67 |             await this.textSearchBox.fill(productName);
  68 |             await this.btnSearch.click();
  69 |         } catch (error) {
  70 |             console.error("Error searching for product:", error);
  71 |             throw error;
  72 |         }
  73 |     }
  74 | 
  75 |     // Enter Search Term
  76 |     async enterSearchTerm(productName: string): Promise<void> {
> 77 |         await this.textSearchBox.fill(productName);
     |                                  ^ Error: locator.fill: value: expected string, got undefined
  78 |     }
  79 | 
  80 |     // Click Search Button
  81 |     async clickSearchButton(): Promise<void> {
  82 |         await this.btnSearch.click();
  83 |     }
  84 | 
  85 |     // Get Search Button Text
  86 |     async getSearchButtonText(): Promise<string> {
  87 |         return (await this.btnSearch.textContent()) || '';
  88 |     }
  89 | 
  90 |     // Get Page Title
  91 |     async getPageTitle(): Promise<string> {
  92 |         try {
  93 |             return await this.page.title();
  94 |         } catch (error) {
  95 |             console.error("Error getting page title:", error);
  96 |             throw error;
  97 |         }
  98 |     }
  99 | }
```