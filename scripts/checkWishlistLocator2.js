const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://naveenautomationlabs.com/opencart/');
  const selectors = [
    "a[title='Wish List']",
    "//a[contains(@href,'route=account/wishlist')]",
    "//a[contains(.,'Wish List')]",
    "//button[@data-original-title='Add to Wish List']",
  ];
  for (const sel of selectors) {
    try {
      const count = await page.locator(sel).count();
      console.log(sel + ': ' + count);
    } catch (e) {
      console.log(sel + ': ERROR ' + e.message);
    }
  }
  await browser.close();
})();
