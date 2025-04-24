// @ts-check



const { test, expect } = require('@playwright/test');
import { Zibalogin123 } from '../pages/loginpagefile';
//const Zibalogin123 = require("../pages/loginpagefile")


test('logintest1',async({page})=> {
  //this will redirect to login page
  await page.goto('https://staging.ziba-property.com/login')
 // page.delayed (3000)
   await page.pause();
  const loginpageziba=new Zibalogin123(page)
  await loginpageziba.Mainlogin_page();
  await loginpageziba.disabled_button_verify();
  await loginpageziba.invalid_email();
  await loginpageziba.valid_email_invalidpassword();
  await loginpageziba.empty_password_and_correctpassword();
  
});






  

  

  
