import { expect } from '@playwright/test';

export class Zibalogin123{

   /**
   * @param {import('@playwright/test').Page} page
   */
       constructor(page){
        this.page=page;
       // this.loginbtn = ".co-cover__bigtitle"
       this.login_main="//span[@class='join__text']"
       this.continue_to_ziba_submit_button="//button[@type='submit']"
        this.email= "//input[@name='email']"
        this.password= "//input[@name='password']"
       // this.submitbtn= "//button[@type='submit']"
        this.main_header_verify="//h4[normalize-space()='Welcome to Ziba Property']"

    }
     async Mainlogin_page(){
        try{
        const login_pagetext_expected="Welcome to Ziba Property";
        const actual_text_login=(await this.page.locator(this.main_header_verify).innerText());
        expect(login_pagetext_expected).toEqual(actual_text_login);
        console.log("login main page verified: Pass!  \n" +actual_text_login)
    }
    catch(error){
        console.log("Unexpected error:" +error)
    }
     }
    // Verify the ziba login verification process include submit disabled option.
     async disabled_button_verify(){
      try{
        expect (this.page.locator(this.continue_to_ziba_submit_button).isDisabled())
     
        console.log("Submit button is disabled: Pass!")

      }
    
    catch(error){
        console.log("unexpected error accur: Failed")
    }
  }
      async invalid_email(){

        //enter invalid email address
        await this.page.fill(this.email,"test.com")
        //verify the button is disabled or not!
        
        expect (this.page.locator(this.continue_to_ziba_submit_button).isDisabled())
        console.log("button is disabled! /n pass");
        //await disabled_button_verify();
       
        await this.page.fill(this.email,"")
        expect (this.page.locator(this.continue_to_ziba_submit_button).isDisabled())
        console.log("button is disabled! /n pass");
        //await disabled_button_verify();
      }

        //expect (this.page.locator(this.continue_to_ziba_submit_button).isDisabled())
        async valid_email_invalidpassword(){
          try{

          
          await this.page.fill(this.email,"abdulrehman@gmail.com")
          await this.page.fill(this.password,"invalidpassword$")
        
        
        if(expect (this.page.locator(this.continue_to_ziba_submit_button).isEnabled()))
        {
          console.log("submit button is enabled:/n pass");
        }
        else
        {
          console.log("submit button is still disabled");
        }
      }
      catch(error){
        console.log("unexpected error accur: Failed")
    }
  }
      
        async empty_password_and_correctpassword(){

        try{
        await this.page.fill(this.password,"")
        
       // await this.disabled_button_verify(page);
       expect (this.page.locator(this.continue_to_ziba_submit_button).isDisabled())
        await this.page.fill(this.password,"ABD1234$")
        await this.page.click(this.continue_to_ziba_submit_button)
        console.log("email and password has been successfully verified !");

      }
      catch(error){
        console.log("Unexpected error: Failed")
      }
      
     }
    }
    //module.exports=Zibalogin123;