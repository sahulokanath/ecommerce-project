# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddTowishList.spec.ts >> Add product to wish list @master
- Location: tests\AddTowishList.spec.ts:30:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('input[name=\'email\']')
    - locator resolved to <input value="" type="text" name="email" id="input-email" class="form-control" placeholder="E-Mail Address"/>
    - fill("test4321@gmail.com")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

```
Error: browserContext.close: Target page, context or browser has been closed
```