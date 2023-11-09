import BasePage from "./BasePage";

export class SignUpPage extends BasePage {

    userNameInput = this._page.locator('#signupName');
    userLastNameInput = this._page.locator('#signupLastName');
    userEmailInput = this._page.locator('#signupEmail');
    userPasswordInput = this._page.locator('#signupPassword');
    userReEnterPasswordInput = this._page.locator('#signupRepeatPassword');
    signUpButton = this._page.locator('button:text("Sign up")');

    registrationButton = this._page.locator('.modal-footer .btn-primary');
    closeButton = this._page.locator('button.close');

    formTitle = this._page.locator('.modal-title');
    newPagePanel = this._page.locator('.panel-page');

    // warning panel
    nameWarningsPanel = this._page.locator('div.invalid-feedback');

    constructor(page) {
        super(page);
    }

    async fillInput(locator, text) {
        await locator.click();
        await locator.fill(text);
    }

    async focusOutFromField() {
        await this.formTitle.click();
    }

    getRandomNumber() {
        return Math.round(Math.random() * 400);
    }

    async openSignUpWindow() {
        await this.signUpButton.waitFor("visible");
        await this.signUpButton.click();
    }

    async closeSignUpWindow() {
        await this.closeButton.click();
    }

    async getFieldBorderColor(field) {
        const color = field.evaluate((el) => {
            const style = window.getComputedStyle(el);
            return style.getPropertyValue("color");
        });
        return color;
    }

    async getWarningNotification(index) {
        await this.nameWarningsPanel.waitFor("visible");

        return await this._page.locator('div.invalid-feedback p')
            .nth(index).innerText();
    }
}

