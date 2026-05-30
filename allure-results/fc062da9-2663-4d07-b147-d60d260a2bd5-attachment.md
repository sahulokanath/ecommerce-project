# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Logout.spec.ts >> Logout functionality @master
- Location: tests\Logout.spec.ts:30:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('//a[text()=\'Logout\']') resolved to 2 elements:
    1) <a href="https://naveenautomationlabs.com/opencart/index.php?route=account/logout">Logout</a> aka locator('#top-links').getByText('Logout')
    2) <a class="list-group-item" href="https://naveenautomationlabs.com/opencart/index.php?route=account/logout">Logout</a> aka getByRole('link', { name: 'Logout' })

Call log:
  - waiting for locator('//a[text()=\'Logout\']')

```

# Test source

```ts
  1  | import {Page,Locator} from '@playwright/test';
  2  | import {Logout} from './Logout';
  3  | export class MyAccountPage {    
  4  | 
  5  |     private readonly page:Page;
  6  | 
  7  | 
  8  |     //locators
  9  |     private readonly textMyAccount:Locator;    
  10 |     private readonly logout:Locator; 
  11 |     constructor(page:Page){
  12 |         this.page=page;
  13 |         this.textMyAccount=page.locator("//h2[text()='My Account']");
  14 |         this.logout=page.locator("//a[text()='Logout']");
  15 |     }
  16 |              
  17 | 
  18 |     async isMyAccountPageDisplayed():Promise<boolean>{
  19 |         const title=await this.page.title();    
  20 |         try {
  21 |             await this.textMyAccount.waitFor({ state: 'visible', timeout: 5000 });
  22 |             return true;
  23 |         } catch (error) {
  24 |             console.error("My Account page is not displayed:", error);
  25 |             return false;
  26 |         }
  27 |     }
  28 | 
  29 |     async clickLogout():Promise<Logout>{
> 30 |         await this.logout.click();
     |                           ^ Error: locator.click: Error: strict mode violation: locator('//a[text()=\'Logout\']') resolved to 2 elements:
  31 |         return new Logout(this.page); 
  32 |     }   
  33 | 
  34 |     
  35 | 
  36 | 
  37 | 
  38 | }
```