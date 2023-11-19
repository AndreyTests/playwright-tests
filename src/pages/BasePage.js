import {config} from "dotenv";

export default class BasePage {

    // userNavDropDown = this._page.locator('#userNavDropdown');
    // logoutBtn = this._page.locator('nav.user-nav_menu.dropdown-menu button', {hasText : 'Logout'});

    // constructor(page, container) {
    //     const wrapper = container ?? page.locator('html');
    //     super(page, wrapper)
    // }


    constructor(page) {
        this.page = page
    }

    async openMainPage(){
        await this.page.goto(config.use.baseURL);
    }

    // async navigate(){
    //     await this.open();
    //     await this.waitLoaded();
    // }
    //
    // async open(){
    //     await this._page.goto('/');
    // }
    //
    // async logout(){
    //     await this.userNavDropDown.click();
    //     await this.logoutBtn.click();
    //     await expect(this._page).toHaveURL('/');
    // }
}