import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  timeout: 40 * 1000,

  expect: {
    timeout: 5 * 1000,
  },


  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright']
  ],



  use: {
    trace: 'retain-on-failure',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://eventhub.rahulshettyacademy.com',
    viewport: { width: 720, height: 720 },
  },


  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'Microsoft Edge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge'
      },
    },

  ]

});
