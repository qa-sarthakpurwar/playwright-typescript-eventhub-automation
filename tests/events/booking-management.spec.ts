import { test } from '../../fixtures/baseFixture';
import { expect } from '@playwright/test';
import testData from '../../test-data/eventhub-data.json';
import * as allure from 'allure-js-commons';

test.describe('Booking Management', () => {

    test('Book maximum allowed tickets (10) & cannot increase above limit', async ({dashboardPage, eventsTabPage, eventBookingPage, page }) => {

        // Metadata
        await allure.epic('EventHub Application');
        await allure.feature('Booking Management');
        await allure.story('Max Ticket Booking Validation');
        await allure.severity('critical');
        await allure.owner('Sarthak');
        await allure.tag('regression');
        await allure.description('Verify user can book maximum 10 tickets and cannot exceed limit');


        // Step 1: Navigate to events
        await allure.step('Navigate to Events page', async () => {
            await expect(dashboardPage.featuredEventsHeading()).toBeVisible();
            await dashboardPage.navigateToAllEvents();
            await expect(eventsTabPage.upcomingEventsHeading()).toBeVisible();
        });

        // Step 2: Search event
        await allure.step('Search for specific event', async () => {
            await eventsTabPage.searchInput().fill(testData.EventsPage.eventDetails.title);
            await expect(eventsTabPage.bookNowButton()).toHaveCount(1);
        });

        // Step 3: Open booking page
        await allure.step('Navigate to booking page', async () => {
            await eventsTabPage.navigateToEventBookingPage();
            await expect(eventBookingPage.bookTicketHeading()).toBeVisible();
        });

        // Step 4: Select tickets
        await allure.step('Select 10 tickets and validate limit', async () => {
            await eventBookingPage.bookTickets(10);
            const selectedTickets = (await eventBookingPage.ticketCount().textContent())?.trim();
            await expect(Number(selectedTickets)).toBe(10);
            await expect(eventBookingPage.ticketIncrementBtn()).toBeDisabled();
        });

        // Step 5: Enter user details
        await allure.step('Enter booking details', async () => {
            await eventBookingPage.enterUserDetailsInForm(
                testData.EventsBookingPage.name,
                testData.LoginPage.validUser.email,
                testData.EventsBookingPage.phoneNo
            );
        });

        //  Step 6: Validate pricing
        await allure.step('Validate total price calculation', async () => {
            const ticketPrice = Number(eventBookingPage.getEventTicketPrice());
            const totalPrice = Number(eventBookingPage.getTotalPrice());

            await allure.attachment(
                'Pricing Details',
                JSON.stringify({ ticketPrice, totalPrice }, null, 2),
                'application/json'
            );

            await expect(totalPrice).toBe(ticketPrice * 10);
        });

        // Step 7: Confirm booking
        await allure.step('Confirm booking and validate', async () => {
            await eventBookingPage.bookTheEvent();

            await expect(eventBookingPage.bookingConfirmedHeading())
                .toContainText(testData.EventsBookingPage.bookinConfirmedHeading);

            const tickets = await eventBookingPage.getNoOfTicketBooked();
            await expect(Number(tickets)).toBe(10);
        });

    });


    test('Book minimum single ticket & cannot decrease below 1', async ({ dashboardPage, eventsTabPage, eventBookingPage }) => {

        // Metadata
        await allure.epic('EventHub Application');
        await allure.feature('Booking Management');
        await allure.story('Minimum Ticket Booking Validation');
        await allure.severity('normal');
        await allure.owner('Sarthak');
        await allure.tag('smoke');
        await allure.description('Verify user can book minimum 1 ticket and cannot decrease below 1');


        //  Step 1: Navigate to event
        await allure.step('Navigate to specific event', async () => {
            await dashboardPage.navigateToAllEvents();
            await eventsTabPage.searchInput().fill(testData.EventsPage.eventDetails.title);
            await expect(eventsTabPage.bookNowButton()).toHaveCount(1);
        });

        // Step 2: Open booking page
        await allure.step('Open booking page', async () => {
            await eventsTabPage.navigateToEventBookingPage();
            await expect(eventBookingPage.bookTicketHeading()).toBeVisible();
        });

        //  Step 3: Validate default ticket
        await allure.step('Validate minimum ticket constraint', async () => {
            const defaultCount = await eventBookingPage.getSelectedTicketCount();
            await expect(Number(defaultCount)).toBe(1);
            await expect(eventBookingPage.ticketDecrementBtn()).toBeDisabled();
        });

        //  Step 4: Book ticket
        await allure.step('Book single ticket', async () => {
            await eventBookingPage.bookTickets(1);
            await eventBookingPage.enterUserDetailsInForm(
                testData.EventsBookingPage.name,
                testData.LoginPage.validUser.email,
                testData.EventsBookingPage.phoneNo
            );
        });

        //  Step 5: Validate price
        await allure.step('Validate pricing for single ticket', async () => {
            const ticketPrice = Number(eventBookingPage.getEventTicketPrice());
            const totalPrice = Number(eventBookingPage.getTotalPrice());

            await expect(totalPrice).toBe(ticketPrice);
        });

        //  Step 6: Confirm booking
        await allure.step('Confirm booking', async () => {
            await eventBookingPage.bookTheEvent();

            await expect(eventBookingPage.bookingConfirmedHeading())
                .toContainText(testData.EventsBookingPage.bookinConfirmedHeading);

            const tickets = await eventBookingPage.getNoOfTicketBooked();
            await expect(Number(tickets)).toBe(1);
        });

    });

});