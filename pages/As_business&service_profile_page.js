export class B_services{

/**
   @param {import('@playwright/test').Page} page
 
   */
constructor (page){
    this.country_dropdown="//span[@id='select2-country-n1-container']";
    this.country_search_field="//input[@class='select2-search__field']";
    this.main_search="//input[@id='search']";

}

async b_services(){
    await page.goto()
}
}





//await page.keyboard.press('Enter');

//await suggestions.waitFor({ state: 'visible' });