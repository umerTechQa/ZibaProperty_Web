// pages/signupPage.js
exports.SignupPage = class SignupPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.roleDropdown = 'select'; // or use actual selector if not a native <select>
      this.nameInput = 'input[placeholder="Name*"]';
      this.emailInput = 'input[placeholder="sample@gmail.com*"]';
      this.phoneInput = 'input[placeholder="Enter a Mobile Number*"]';
      this.passwordInput = 'input[placeholder="Password*"]';
      this.signupButton = 'button:has-text("Sign up")';
    }
  
    async goto() {
      await this.page.goto('https://staging.ziba-property.com/signup');
    }
  
    async fillForm({ role, name, email, phone, password }) {

      // Opening role drop-down
      await this.page.click('.dropdown-toggle'); 
      //Selecting role
      await this.page.locator('xpath=/html/body/div[2]/div[1]/div/div/div[1]/div[2]/div/form/div[1]/div/div/div/ul/li[2]/a').click();
      await this.page.fill(this.nameInput, name);
      await this.page.fill(this.emailInput, email);
      await this.page.fill(this.phoneInput, phone);
      await this.page.fill(this.passwordInput, password);
    }
  
    async submit() {
      await this.page.click(this.signupButton);
    }
  };
  