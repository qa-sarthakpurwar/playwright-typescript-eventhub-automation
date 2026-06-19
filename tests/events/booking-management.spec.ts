import { test } from '../../fixtures/baseFixture';
import { expect } from '@playwright/test';
import testData from '../../test-data/eventhub-data.json';



test.describe('Booking Management', () => {
    test('Book an Event', async ({ loginPage, page }) => {
        /**Navigate  to application & login */
        await loginPage.navigateToLoginPage();
        await loginPage.login(testData.LoginPage.validUser);

        /**Verify user in dashboard page */
        await expect(page.getByRole('heading', { name: 'Featured Events' })).toBeVisible();

        await page.locator("a:has-text('View all')").click();
        /**Verify that u are in  Events Tab */
        await expect(page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Book Now' })).toHaveCount(4);

        // await expect(page.getByRole('link', { name: 'Book Now' }).count()).toBeGreaterThan(1);
        await page.getByPlaceholder('Search events, venues…').fill('Tech Meetup');

        await expect(page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();

        await expect(page.getByRole('link', { name: 'Book Now' })).toHaveCount(1);






    })
})