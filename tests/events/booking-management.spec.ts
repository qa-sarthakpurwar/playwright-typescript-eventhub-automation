import { test } from '../../fixtures/baseFixture';
import { expect } from '@playwright/test';
import testData from '../../test-data/eventhub-data.json';



test.describe('Booking Management', () => {



    test('Book an Event with 10 ticket', async ({ loginPage, dashboardPage, eventsTabPage, eventBookingPage, page }) => {

        /**Navigate  to application & login */
        await loginPage.navigateToLoginPage();
        await loginPage.login(testData.LoginPage.validUser);

        /**Verify user in dashboard page */
        await expect(dashboardPage.featuredEventsHeading()).toBeVisible();
        await dashboardPage.navigateToAllEvents();

        /**Verify that u are in  Events Tab */
        await expect(eventsTabPage.upcomingEventsHeading()).toBeVisible();
        await expect(eventsTabPage.bookNowButton()).toHaveCount(4);


        /** Search for specific Event */
        await eventsTabPage.searchInput().fill('Tech Meetup');
        await expect(eventsTabPage.bookNowButton()).toHaveCount(1);

        /* Go into the event booking page*/
        await eventsTabPage.navigateToEventBookingPage();
        await expect(eventBookingPage.bookTicketHeading()).toBeVisible();


        /** Add 10 tickets  */
        await eventBookingPage.bookTickets(10);
        const selectedTickets = (await eventBookingPage.ticketCount().textContent())?.trim();

        /**Verify that 10 tickets have been selected */
        await expect(Number(selectedTickets)).toBe(10);

        /* Enter remaining details  in form */

        await expect(eventBookingPage.fullNameInput()).toHaveAttribute('placeholder', 'Your full name');
        await expect(eventBookingPage.emailInput()).toHaveAttribute('placeholder', 'you@email.com');
        await expect(eventBookingPage.phoneNoInput).toBeTruthy();

        await eventBookingPage.enterUserDetailsInForm('Sarthak', 'signaturemusic12@gmail.com', '464692462398');

        /**Verify the total calculated amount according  to the ticket amount */

        const ticketPrice = Number(eventBookingPage.getEventTicketPrice());
        const totalTicketPrice = ticketPrice * 10;
        const totalPrice = Number(eventBookingPage.getTotalPrice());

        await expect(totalPrice).toBe(totalTicketPrice);

        /**Confirm booking */
        await eventBookingPage.bookTheEvent();

        /**Verify confirmed booking */
        await expect(eventBookingPage.bookingConfirmedHeading()).toContainText('Booking Confirmed!');
        await expect(eventBookingPage.bookinRefId()).not.toBeEmpty();

        const customerName = await eventBookingPage.getBookedCustomerName();
        await expect(customerName).toBe('Sarthak');

        const noOfBookedTickets = await eventBookingPage.getNoOfTicketBooked();
        await expect(noOfBookedTickets).toBe('10');



    })
})