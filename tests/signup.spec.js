// signup.spec.js
const { test, expect } = require('@playwright/test');
const { SignupPage } = require('../pages/signupPage');


test('Agent Sign Up on Ziba Property', async ({ page }) => {
  const signup = new SignupPage(page);

  await signup.goto();

  await signup.fillForm({
    role: ' Real Estate Agent',
    name: 'AR Agent',
    //email: 'ar.agent' + Date.now() + '@mail.com',
    email: 'arAtuo1@yopmail.com',
    phone: '1121019309',
    password: '12345678'
  });

  await signup.submit();

  // Assertion or wait after submission (adjust selector as needed)
  await page.waitForTimeout(10000);
});
