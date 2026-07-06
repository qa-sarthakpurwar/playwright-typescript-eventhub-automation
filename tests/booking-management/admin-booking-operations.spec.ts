import { test } from '../../fixtures/baseFixture';
import { expect } from '@playwright/test';
import * as allure from 'allure-js-commons';

test.describe('Admin Booking Operations', () => {

    test('Verify that admin can view and validate booking details', async ({dashboardPage,manageBookingPage}) => {

        await allure.epic('EventHub Application');
        await allure.feature('Booking Management');
        await allure.story('Admin Booking Details Validation');
        await allure.severity('critical');
        await allure.owner('Sarthak');
        await allure.tag('regression');
        await allure.description(
            'Verify that an admin can view and validate the details of a confirmed booking.'
        );

        // Step 1: Verify dashboard
        await allure.step('Verify admin is on the Dashboard page', async () => {
            const dashboardHeading = await dashboardPage.getDashBoardHeading();
            await expect(dashboardHeading).toContain(
                'From tech conferences to live concerts'
            );
        });

        // Step 2: Navigate to Manage Bookings
        await allure.step('Navigate to the Manage Bookings page', async () => {
            await dashboardPage.navigateToManageBookings();
        });

        // Step 3: Validate booking list
        await allure.step('Verify confirmed booking is displayed', async () => {
            await expect(manageBookingPage.manageBookingHeading()).toBeVisible();
            await expect(manageBookingPage.confirmedText()).toHaveText('confirmed');
        });

        // Step 4: Open booking details
        await allure.step('Open booking details', async () => {
            await manageBookingPage.bookingViewButton().click();
        });

        // Step 5: Validate booking details
        await allure.step('Validate booking details', async () => {
            await expect(manageBookingPage.confirmTextDetailsWindow()).toBeVisible();
            await expect(manageBookingPage.bookingTitleDetailsWindow()).toHaveText('Tech Meetup');
            await expect(manageBookingPage.bookingCityDetailsWindow()).toHaveText('Hyderabad');

            const bookedEmail = await manageBookingPage.getEmailValueDetailsWindow();
            expect(bookedEmail).not.toBeNull();
        });

        // Step 6: Close booking details
        await allure.step('Close booking details window', async () => {
            await manageBookingPage.closeDetailsWindow();
        });

    });

});