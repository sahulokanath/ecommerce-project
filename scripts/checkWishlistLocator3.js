const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://naveenautomationlabs.com/opencart/');
  const sel = "//div[contains(@class,'product-thumb')][.//a[text()='iPhone']]//button[@data-original-title='Add to Wish List']";
  try {
      const count = await page.locator(sel).count();
      console.log(sel + ': ' + count);
  } catch (e) {
      console.log(sel + ': ERROR ' + e.message);
  }
  await browser.close();
})();
