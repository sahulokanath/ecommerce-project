const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://naveenautomationlabs.com/opencart/');
  const elements = await page.locator('a', { hasText: 'Login' }).all();
  console.log('anchors with text Login:', elements.length);
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    const href = await el.getAttribute('href');
    const title = await el.getAttribute('title');
    const text = await el.textContent();
    console.log(i, { href, title, text: text?.trim() });
  }
  await browser.close();
})();
