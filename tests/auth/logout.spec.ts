import { test }  from '../../fixtures/baseFixture';
import { expect } from '@playwright/test';
import testData from  '../../test-data/eventhub-data.json';



test.describe('Authentication & User Management', () => {


    test('Successful logout', async ({ loginPage , page }) => {

        /**Login with valid credentials */
        await loginPage.navigateToLoginPage();
        await  loginPage.login(testData.LoginPage.validUser.email, testData.LoginPage.validUser.password);

        /**Verify logged in state */
        await expect(loginPage.logOutButton()).toBeVisible();
        await expect(page.url()).not.toContain('/login');

        /**Click Logout button */
        await  loginPage.logOutButton().click();

        /**Verify user is redirected to login page */
        await expect(page.url()).toContain('/login');
        await expect(loginPage.signInToEventHubText()).toBeVisible();

    })



})