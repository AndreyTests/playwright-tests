
import { expect } from '@playwright/test';

import { test } from '../fixtures/page.fixtures'

test.describe("Check the garage page view", ()=> {
    test.only("test", async ({ page}) => {
        expect(await page.url()).toContain('/garage');
    })
});
