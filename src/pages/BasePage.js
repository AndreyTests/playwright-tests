import BaseComponent from "./BaseComponent.js";

import {expect} from "@playwright/test";

export default class BasePage extends BaseComponent {

    userNavDropDown = this._page.locator('#userNavDropdown');
    logoutBtn = this._page.locator('nav.user-nav_menu.dropdown-menu button', {hasText : 'Logout'});

    constructor(page, container) {
        const wrapper = container ?? page.locator('html');
        super(page, wrapper)
    }

    async navigate(){
        await this.open();
        await this.waitLoaded();
    }

    async open(){
        await this._page.goto('/');
    }

    async logout(){
        await this.userNavDropDown.click();
        await this.logoutBtn.click();
        await expect(this._page).toHaveURL('/');
    }
}