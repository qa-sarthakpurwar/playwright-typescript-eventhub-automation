import { test } from '../../fixtures/baseFixture';
import { expect } from '@playwright/test';
import testData from '../../test-data/eventhub-data.json';



test.describe('Authentication & User Management', () => {




    test('Successful login with valid credentials', async ({ loginPage }) => {

        /* Navigate  to  login page */
        await loginPage.navigateToLoginPage();

        /** Login with valid creds */
        await loginPage.login(testData.LoginPage.validUser.email, testData.LoginPage.validUser.password);

        /**Verify user is redirected to home page */
        await expect(loginPage.myBookingsButton()).toBeVisible();

        /**Verify user email is visible in navigation */
        await expect(loginPage.userEmailDisplay()).toHaveText(testData.LoginPage.validUser.email);

        /** Verify Logout button is visible */
        await expect(loginPage.logOutButton()).toBeVisible();

    });

    test('Login fails with invalid email', async ({ loginPage }) => {


        /** Navigate to login page */
        await loginPage.navigateToLoginPage();

        /**Login with invalid email and valid password */
        await loginPage.login(testData.LoginPage.invalidUser.email, testData.LoginPage.validUser.password);

        /**Verify error message is displayed */
        await expect(loginPage.invalidEmailMsg()).toHaveText(testData.LoginPage.invalidEmailMsg);


    });

    test('Login fails with invalid password', async ({ loginPage, page }) => {


        /** Navigate to login page */
        await loginPage.navigateToLoginPage();

        /**Login with valid email and invalid password */
        await loginPage.login(testData.LoginPage.validUser.email, testData.LoginPage.invalidUser.password);

        /**Verify error message is displayed */

        await expect(loginPage.invalidEmailPasswordMsg()).toBeVisible();
        await expect(page).toHaveURL('/login');

        expect(loginPage.emailInput()).toHaveValue(testData.LoginPage.validUser.email);
        expect(loginPage.passwordInput()).toHaveValue(testData.LoginPage.invalidUser.password);


    });








});