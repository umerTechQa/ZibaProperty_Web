

//add new propperty listy click button and verofy its functionality then back and follow below
//it block needs to created "For Sale"  and this needs to verify ---> based on  All list, property type, min/max price, bedroom, bathroom, parking dropdown
// it block needs to created "For Rent"  and this needs to verify ---> based on  All list, property type, min/max price, bedroom, bathroom, parking dropdown
//  Country dropdown verify
//search verify
//sort by verify
//listed property items verify
//favt button verify
//whatsapp redirection verify by its url
//Email verify by its redirection

//

//Add new Property list
export class Property_listing{

    constructor (page){
        this.page=page;
        this.add_property_list_button="//a[text()='+ Add a New Property Listing']";
        this.dropdown_property_name="//*[@id='vacancyFormVue']/div/div/div[2]/span/form/div/div[1]/div[1]/span/div/span/span[1]/span";
        

    }
    async property_listing_test01(){
       await this.page.click(this.add_property_list_button)
       await this.page.click(this.dropdown_property_name)
       //const element = await this.page.click('selector').nth(0);
       //element.click()



    }

}
