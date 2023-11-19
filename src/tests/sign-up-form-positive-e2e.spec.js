import { test, expect } from '@playwright/test';
import { SignUpPage } from "../pages/SignUpPage";

test.describe("Sign Up form positive testing", ()=> {
    let page;
    let signUpPage;

    test.beforeAll(async ({browser})=>{
        page = await browser.newPage();

        signUpPage = new SignUpPage(page);

        await signUpPage.navigate();
        await signUpPage.openSignUpWindow();
    });

    test("verify the user is created", async () => {
        const randomNumber = signUpPage.getRandomNumber();
        const generateRandomEmail = `aqa-${randomNumber}andriy@gmail.com.ua`;

        await signUpPage.fillInput(signUpPage.userNameInput, 'FirstName');
        await signUpPage.fillInput(signUpPage.userLastNameInput, 'LastName');
        await signUpPage.fillInput(signUpPage.userEmailInput, generateRandomEmail);
        await signUpPage.fillInput(signUpPage.userPasswordInput, 'Ab12345678');
        await signUpPage.fillInput(signUpPage.userReEnterPasswordInput, 'Ab12345678');

        expect(await signUpPage.registrationButton.isDisabled()).toBe(false);

        // await signUpPage.registrationButton.click();
        // await page.waitForTimeout(1000);
        // await signUpPage.newPagePanel.waitFor();
        //
        // expect(await signUpPage.newPagePanel.isVisible()).toBe(true);
    });
})

