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
  1   | import { Page, test, expect, Locator } from '@playwright/test';
  2   | 
  3   | export class HomePage {
  4   | 
  5   |     // Locators
  6   |     private readonly page: Page;
  7   |     private readonly lnkMyAccount: Locator;
  8   |     private readonly lnkLogin: Locator;
  9   |     private readonly lnkRegister: Locator;
  10  |     private readonly textSearchBox: Locator;
  11  |     private readonly btnSearch: Locator;
  12  | 
  13  |     // Constructor
  14  |     constructor(page: Page) {
  15  |         this.page = page;
  16  | 
  17  |         this.lnkMyAccount = page.locator("a[title='My Account']");
  18  |         this.lnkLogin = page.locator("a[title='Login']");
  19  |         this.lnkRegister = page.locator(
  20  |             "//ul[@class='dropdown-menu dropdown-menu-right']//a[text()='Register']"
  21  |         );
  22  |         this.textSearchBox = page.locator("input[name='search']");
  23  |         this.btnSearch = page.locator("button[class='btn btn-default btn-lg']");
  24  |     }
  25  | 
  26  |     // Verify home page
  27  |     async isHomePageDisplayed(): Promise<boolean> {
  28  |         const title = await this.page.title();
  29  | 
  30  |         if (title) {
  31  |             return true;
  32  |         }
  33  |         return false;
  34  |     }
  35  | 
  36  |     // Click My Account
  37  |     async clickMyAccount(): Promise<void> {
  38  |         try {
  39  |             await this.lnkMyAccount.click();
  40  |         } catch (error) {
  41  |             console.error("Error clicking My Account link:", error);
  42  |             throw error;
  43  |         }
  44  |     }
  45  | 
  46  |     // Click Login
  47  |     async clickLogin(): Promise<void> {
  48  |         try {
> 49  |             await this.lnkLogin.click();
      |                                 ^ Error: locator.click: Target page, context or browser has been closed
  50  |         } catch (error) {
  51  |             console.error("Error clicking Login link:", error);
  52  |             throw error;
  53  |         }
  54  |     }
  55  | 
  56  |     // Click Register
  57  |     async clickRegister(): Promise<void> {
  58  |         try {
  59  |             await this.lnkRegister.click();
  60  |         } catch (error) {
  61  |             console.error("Error clicking Register link:", error);
  62  |             throw error;
  63  |         }
  64  |     }
  65  | 
  66  |     // Search Product
  67  |     async searchProduct(productName: string): Promise<void> {
  68  |         try {
  69  |             await this.textSearchBox.fill(productName);
  70  |             await this.btnSearch.click();
  71  |         } catch (error) {
  72  |             console.error("Error searching for product:", error);
  73  |             throw error;
  74  |         }
  75  |     }
  76  | 
  77  |     // Enter Search Term
  78  |     async enterSearchTerm(productName: string): Promise<void> {
  79  |         await this.textSearchBox.fill(productName);
  80  |     }
  81  | 
  82  |     // Click Search Button
  83  |     async clickSearchButton(): Promise<void> {
  84  |         await this.btnSearch.click();
  85  |     }
  86  | 
  87  |     // Get Search Button Text
  88  |     async getSearchButtonText(): Promise<string> {
  89  |         return (await this.btnSearch.textContent()) || '';
  90  |     }
  91  | 
  92  |     // Get Page Title
  93  |     async getPageTitle(): Promise<string> {
  94  |         try {
  95  |             return await this.page.title();
  96  |         } catch (error) {
  97  |             console.error("Error getting page title:", error);
  98  |             throw error;
  99  |         }
  100 |     }
  101 | }
```