const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://naveenautomationlabs.com/opencart/');
  console.log('title', await page.title());
  const myAccount = await page.locator("a[title='My Account']").count();
  const login = await page.locator("a[title='Login']").count();
  const loginText = await page.locator("a[title='Login']").allTextContents();
  console.log('myAccount', myAccount, 'login', login, loginText);
  await browser.close();
})();
