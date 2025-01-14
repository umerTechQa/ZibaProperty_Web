const { test, expect } = require('@playwright/test');
import { Property_listing } from '../pages/Property_listings';
//import { Zibalogin123 } from '../pages/loginpagefile';



test('logintest1',async({page})=> {

  await page.goto('https://development.ziba-property.com/sale')
  const propertylist1=new Property_listing(page)
  await propertylist1.property_listing_test01()
  
});