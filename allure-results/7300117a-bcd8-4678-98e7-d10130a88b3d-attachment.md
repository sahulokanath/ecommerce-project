# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddTowishList.spec.ts >> Add product to wish list @master
- Location: tests\AddTowishList.spec.ts:33:5

# Error details

```
Error: locator.click: SyntaxError: Failed to execute 'evaluate' on 'Document': The string '//span[@contains(text(),"Wish List")]' is not a valid XPath expression.
    at Object.queryAll (<anonymous>:6017:25)
    at InjectedScript._queryEngineAll (<anonymous>:6730:49)
    at InjectedScript.querySelectorAll (<anonymous>:6717:30)
    at eval (eval at evaluate (:302:30), <anonymous>:2:39)
    at UtilityScript.evaluate (<anonymous>:304:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)
Call log:
  - waiting for locator('//span[@contains(text(),"Wish List")]')

```