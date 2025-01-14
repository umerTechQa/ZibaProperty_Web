export class Zibalogin123{

   /**
   * @param {import('@playwright/test').Page} page
   */
       constructor(page){
        this.page=page;
       // this.loginbtn = ".co-cover__bigtitle"
        this.email= "//input[@name='email']"
        this.password= "//input[@name='password']"
        this.submitbtn= "//button[@type='submit']"
        
    }

    

    async ziba_login_negative_scenarios(){
     
        await this.page.isDisabled(this.submitbtn)
        
    }
     async zibalogin(){
      
    
      //await this.page.click(this.loginbtn)
      
      await this.page.fill(this.email,"abdulrehman@gmail.com")
      await this.page.fill(this.password,"ABD1234$")
      await this.page.click(this.submitbtn)
      
      
     }
    }
    //module.exports=Zibalogin123;