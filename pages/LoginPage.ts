import {test,expect,Locator,Page} from '@playwright/test';

export class LoginPage {

    private readonly page:Page;

    //locators      
   private readonly textEmail:Locator;
   private readonly textPassword:Locator;
   private readonly btnLogin:Locator;
   private readonly  textErrormasg:Locator;

   constructor(page:Page){
    this.page=page;
    this.textEmail=page.locator("input[name='email']");
    this.textPassword=page.locator("input[name='password']");
    this.btnLogin=page.locator("//input[@type='submit']");
    this.textErrormasg=page.locator("//div[contains(@class,'alert-danger')]");
   }

   async enterEmail(email:string):Promise<void>{
    await this.textEmail.fill(email);
   }
   async enterPassword(password:string):Promise<void>{
    await this.textPassword.fill(password);
   }
    async clickLogin():Promise<void>{       
    await this.btnLogin.click();
   }
   async getErrorMsg():Promise<string>{
    return await this.textErrormasg.textContent() || '';
   }    

   async login(email:string,password:string):Promise<void>{
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLogin();
   }
}
