import {chromium} from "@playwright/test";

async function globalSetup(config) {
    const { storageState } = config.projects[0].use;
    const browser = await chromium.launch({slowMo: 700});
    const context = await browser.newContext({storageState});
    const page = await context.newPage();
    await browser.close();
}

export default globalSetup;