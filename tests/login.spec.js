// @ts-check



const { test, expect } = require('@playwright/test');
import { Zibalogin123 } from '../pages/loginpagefile';
//const Zibalogin123 = require("../pages/loginpagefile")


test('logintest1',async({page})=> {
  await page.goto('https://development.ziba-property.com/login')
 // page.delayed (3000)
   await page.pause();
  const loginpageziba=new Zibalogin123(page)
  await loginpageziba.zibalogin()
  
});






  

  

  
