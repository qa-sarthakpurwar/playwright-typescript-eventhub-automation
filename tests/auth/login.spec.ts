import { test, expect } from '@playwright/test';
import { PageObjectManager } from '../../pageObjects/PageObjectManager';


test.describe('Authentication & User Management', () => {


    test('Successful login with valid credentials', async ({ page }) => {

        /* Navigate  to  login page */
        await page.goto('https://eventhub.rahulshettyacademy.com/login');


        const pageObject = new PageObjectManager(page);
        const loginPage = pageObject.getLoginPage();

        loginPage.login("signaturemusic12@gmail.com", "AssertSuccess@204");

        /**Verify user is redirected to home page */
        await expect(loginPage.myBookingsButton()).toBeVisible();

        /**Verify user email is visible in navigation */
        await expect(loginPage.userEmailDisplay()).toHaveText('signaturemusic12@gmail.com');

        /** Verify Logout button is visible */
        await expect(loginPage.logOutButton()).toBeVisible();

    });

    test('Login fails with invalid email', async ({ page }) => {


        /** Navigate to login page */

        await page.goto('https://eventhub.rahulshettyacademy.com/login');

        /**Enter invalid email and valid password */

        await page.getByRole('textbox', { name: 'Email' }).fill('invalidmailgmail.com');
        await page.getByRole('textbox', { name: 'Password' }).fill("AssertSuccess@204");

        /**Click Sign In button */

        await page.getByRole('button', { name: 'Sign In' }).click();

        /**Verify error message is displayed */

        await expect(page.locator('#email + p')).toHaveText('Enter a valid email');


    });

    test('Login fails with invalid password', async ({ page }) => {


        /** Navigate to login page */

        await page.goto('https://eventhub.rahulshettyacademy.com/login');

        /**Enter invalid email and valid password */

        await page.getByRole('textbox', { name: 'Email' }).fill('signaturemusic12@gmail.com');
        await page.getByRole('textbox', { name: 'Password' }).fill("AssertSuccess@@@");

        /**Click Sign In button */

        await page.getByRole('button', { name: 'Sign In' }).click();

        /**Verify error message is displayed */

        await expect(page.getByText('Invalid email or password')).toBeVisible();
        await expect(page.url()).toContain('/login');

        expect(page.getByRole('textbox', { name: 'Email' })).toHaveValue('signaturemusic12@gmail.com');
        expect(page.getByRole('textbox', { name: 'Password' })).toHaveValue('AssertSuccess@@@');


    });








});