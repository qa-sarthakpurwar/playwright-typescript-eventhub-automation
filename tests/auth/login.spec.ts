import { test } from '../../fixtures/baseFixture';
import { expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';


test.describe('Authentication & User Management', () => {




    test('Successful login with valid credentials', async ({ loginPage }) => {

        /* Navigate  to  login page */
        await loginPage.navigateToLoginPage();

        /** Login with valid creds */
        await loginPage.login("signaturemusic12@gmail.com", "AssertSuccess@204");

        /**Verify user is redirected to home page */
        await expect(loginPage.myBookingsButton()).toBeVisible();

        /**Verify user email is visible in navigation */
        await expect(loginPage.userEmailDisplay()).toHaveText('signaturemusic12@gmail.com');

        /** Verify Logout button is visible */
        await expect(loginPage.logOutButton()).toBeVisible();

    });

    test('Login fails with invalid email', async ({ loginPage }) => {


        /** Navigate to login page */
        await loginPage.navigateToLoginPage();

        /**Login with invalid email and valid password */
        await loginPage.login('invalidgmail.com', 'AssertSuccess@204');

        /**Verify error message is displayed */
        await expect(loginPage.invalidEmailMsg()).toHaveText('Enter a valid email');


    });

    test('Login fails with invalid password', async ({ loginPage, page }) => {


        /** Navigate to login page */
        await loginPage.navigateToLoginPage();

        /**Login with valid email and invalid password */
        await loginPage.login('signaturemusic12@gmail.com', 'AssertSuccess@@@');

        /**Verify error message is displayed */

        await expect(loginPage.invalidEmailPasswordMsg()).toBeVisible();
        await expect(page).toHaveURL('/login');

        expect(loginPage.emailInput()).toHaveValue('signaturemusic12@gmail.com');
        expect(loginPage.passwordInput()).toHaveValue('AssertSuccess@@@');


    });








});