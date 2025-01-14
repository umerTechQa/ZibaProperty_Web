export class ZibaSignup{

    /**
    * @param {import('@playwright/test').Page} page
    */
        constructor(page){
         this.page=page;
        // this.loginbtn = ".co-cover__bigtitle"
         this.select_role= "//button[@class='btn dropdown-toggle btn-default bs-placeholder']"
         this.name= "//input[@placeholder='Name*']"
         this.email_1= "//input[@placeholder='sample@gmail.com*']"
         this.phone_number= "//input[@id='mobile']"
         this.password_field= "//input[@placeholder='Password*']"
         this.button_submit= "//button[@type='submit']"

     }
 
     
      async zibasignup(){
       
     
       //await this.page.click(this.loginbtn)
       await this.page.selectOption(this.select_role,{index:0})
       await this.page.fill(this.name,"David Smith")
       await this.page.fill(this.email_1,"abc1234@gmail.com")
       await this.page.fill(this.phone_number,"abc1234@gmail.com")
       await this.page.click(this.submitbtn)
       page.pause();
       
      }
     }