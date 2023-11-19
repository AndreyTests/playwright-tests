import BasePage from "./BasePage";

export class SignInModal extends BasePage {

    signInButton = this.page.locator('button:text("Sign In")');
    modal = this.page.locator('.modal-open');
    userEmailInput = this.page.locator('#signinEmail');
    userPasswordInput = this.page.locator('#signinPassword');
    loginButton = this.page.locator('button:text("Login")');
    // cancelIcon = this._page.locator('.close');
    // garageTitle = this._page.locator('.panel-page_heading.d-flex justify-content-between');

    async openMainPage(){
        await this.page.goto('/');
    }

    async openSignInModal(){
        await this.signInButton.click();
        await this.modal.waitFor('visible');
    }

    async fillSignInModal(email, password) {
        await this.userEmailInput.fill(email);
        await this.userPasswordInput.fill(password);
    }

    async login() {
        await this.loginButton.click();
    }

}
