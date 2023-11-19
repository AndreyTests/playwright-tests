import { test as base } from "@playwright/test";
import { SignInModal } from "../pages/SignInModal";
export const test = base.extend<{
    signInModal: SignInModal
}>({
    signInModal: async ( {page}, use) => {
        await use(new SignInModal(page))
    }
});

export const { expect } = test;