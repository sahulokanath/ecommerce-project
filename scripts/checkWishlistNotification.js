const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://naveenautomationlabs.com/opencart/');
  await page.click("a[title='My Account']");
  await page.click("//ul[@class='dropdown-menu dropdown-menu-right']//a[text()='Login']");
  await page.fill('input[name=email]', 'test4321@gmail.com');
  await page.fill('input[name=password]', '@1234@Test');
  await page.click("//input[@type='submit']");
  await page.goto('https://naveenautomationlabs.com/opencart/');
  await page.click("//div[contains(@class,'product-thumb')][.//a[text()='iPhone']]//button[@data-original-title='Add to Wish List']");
  await page.waitForTimeout(2000);
  const hasSuccess = await page.evaluate(() => document.body.innerText.includes('Success'));
  console.log('body includes Success:', hasSuccess);
  console.log('alert-success count:', await page.locator('div.alert-success').count());
  console.log('text of alerts:', JSON.stringify(await page.locator('div.alert').allTextContents(), null, 2));
  await browser.close();
})();
