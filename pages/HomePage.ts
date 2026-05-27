import {Page,test,expect, Locator} from '@playwright/test';

export class HomePage
{

    //locators

    private readonly page:Page;
    private readonly lnkMyAccount:Locator;
    private readonly lnkLogin:Locator;
    private readonly lnkRegister:Locator;
    private readonly textSearchBox:Locator;
    private readonly btnSearch:Locator;


    //coonstrutor --> initilize the locater in to the variables

    constructor(page:Page)
    {
        this.page=page;
        this.lnkMyAccount=page.locator("a[title='My Account']");
        this.lnkLogin=page.locator("a[title='Login']");
        this.lnkRegister=page.locator("a[title='Register']");
        this.textSearchBox=page.locator("input[name='search']");
        this.btnSearch=page.locator("button[class='btn btn-default btn-lg']");
    }

    //page is exist or not

    async isHomePageDisplayed()
    {
     const title=  await this.page.title();

       
    }

}