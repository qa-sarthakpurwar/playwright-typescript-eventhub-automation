import { test } from '../../fixtures/baseFixture';
import { expect } from '@playwright/test';



test.describe('Admin Booking Operations', () => {

    test('Verify that admin can view and validate booking details', async ({ page }) => {
        /** Verify that admin is on dashboard page*/

        const dashboardHeading = await page.locator('h1 +  p').innerText();
        await expect(dashboardHeading).toContain('From tech conferences to live concerts');

        /** Navigate to Manage Booking Page*/
        await page.getByRole('button', { name: 'Admin' }).click();
        await page.getByRole('link', { name: 'Manage Bookings' }).click();

        /*Verify that user is in Manage  Booking Page* */
        await expect(page.getByRole('heading', { name: 'Manage Bookings' })).toBeVisible();

        await expect(page.locator('tbody tr').first().locator('td').nth(5)).toHaveText('confirmed');

        await page.getByRole('button', { name: 'View' }).first().click();

        /** Verify the booking details */
        await expect(page.locator("div[aria-labelledby='modal-title']  div.items-start span.inline-flex")).toBeVisible();
        await expect(page.locator("//span[text()='Title']/following-sibling::span")).toHaveText('Tech Meetup');
        await expect(page.locator("//span[text()='City']/following-sibling::span")).toHaveText('Hyderabad');
        const email = await page
            .locator("//span[text()='Email']/following-sibling::span")
            .textContent();

        expect(email).not.toBeNull();

        await page.locator("button[aria-label='Close']").click();






    });

});

