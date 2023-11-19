// @ts-check
import { PlaywrightTestConfig } from "@playwright/test";

const { devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */

const config = {
  testDir: './src/tests',
  globalSetup: './src/utils/global-setup',
  timeout: 300_000,
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://qauto.forstudy.space/',
    headless: false,
    viewport: {
      width: 1200,
      height: 840
    },
    trace: 'on-first-retry',
  },

  projects: [
    {name: 'setup', testMatch: /.*\.setup\.js/},
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'auth/user.json'
      },
      dependencies: ['setup']
    }
    ]
}

export default config;

