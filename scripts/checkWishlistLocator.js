const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://naveenautomationlabs.com/opencart/');
  const locs = [
    {desc: "button[data-original-title='Add to Wish List']", sel: "button[data-original-title='Add to Wish List']"},
    {desc: "//button[contains(@data-original-title,'Wish List')]", sel: "//button[contains(@data-original-title,'Wish List')]"},
    {desc: "//button[contains(@onclick,'wishlist')]", sel: "//button[contains(@onclick,'wishlist')]"},
    {desc: "//button[contains(.,'Wish List')]", sel: "//button[contains(.,'Wish List')]"},
    {desc: "//span[text()='Wish List']", sel: "//span[text()='Wish List']"}
  ];
  for (const item of locs) {
    try {
      const count = await page.locator(item.sel).count();
      console.log(item.desc + ': ' + count);
    } catch (e) {
      console.log(item.desc + ': ERROR ' + e.message);
    }
  }
  await browser.close();
})();
