import { test as setup, expect } from '@playwright/test';
import { SignInModal } from "../pages/SignInModal";
import { USERS } from "../data/users";

const userStorage = '../../auth/user.json';

setup('Authenticate the user and save storage state', async ({ page }) => {
    const signInModal = new SignInModal(page);

    await signInModal.openMainPage();
    await signInModal.openSignInModal();
    await signInModal.fillSignInModal(USERS.FIRST_USER.email, USERS.FIRST_USER.password);
    await signInModal.login();

    await page.context().storageState({ path: userStorage });
});