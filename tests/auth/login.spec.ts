import { test, expect } from '@playwright/test';


test.describe('Authentication & User Management', () => {


    test('Successful login with valid credentials', async ({ page }) => {

        /* Navigate  to  login page */
        await page.goto('https://eventhub.rahulshettyacademy.com/login');

        /** Enter email and password with valid credentials */
        await page.getByRole('textbox', { name: 'Email' }).fill('signaturemusic12@gmail.com');
        await page.getByRole('textbox', { name: 'Password' }).fill('AssertSuccess@204');

        /** Click Sign In button */
        await page.getByRole('button', { name: 'Sign In' }).click();

        /**Verify user is redirected to home page */
        await expect(page.getByRole('button', { name: 'My Bookings' })).toBeVisible();

        /**Verify user email is visible in navigation */

        await expect(page.locator('#user-email-display')).toHaveText('signaturemusic12@gmail.com');

        /** Verify Logout button is visible */
        await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();

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