const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: {
    timeout: 7_000,
  },

  fullyParallel: false,
  retries: 1,
  workers: 1,

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright', { resultsDir: 'allure-results' }],
  ],
  //  reporter: [
  //   ['dot'],
  //   ['json', {outputFile: "jsonReports/jsonReport.json"}],
  //   ['allure-playwright']
  // ],

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    browserName: 'chromium',
    headless: false,
    viewport: { width: 1440, height: 900 },
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure', // * only failed test cases will be shown
    video: 'retain-on-failure', 
    actionTimeout: 10_000,
    navigationTimeout: 20_000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  outputDir: 'test-results/',
})