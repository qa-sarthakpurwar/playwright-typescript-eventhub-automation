import { Page } from "@playwright/test";


export class EventBookingPage {
    constructor(private page: Page) { }


    bookTicketHeading = () => this.page.getByRole('heading', { name: 'Book Tickets' });
    ticketCount = () => this.page.locator('#ticket-count');
    ticketIncrementBtn = () => this.page.locator('#ticket-count + button');
    fullNameInput = () => this.page.getByRole('textbox', { name: 'Full Name' });
    emailInput = () => this.page.getByRole('textbox', { name: 'Email' });
    phoneNoInput = () => this.page.getByRole('textbox', { name: 'Phone Number' });
    eventTicketPrice = () => this.page.locator('h2 + span');
    totalTicketPrice = () => this.page.locator("span:has-text('Total') + span");
    confirmBookingButton = () => this.page.getByRole('button', { name: 'Confirm Booking' });
    bookingConfirmedHeading = () => this.page.locator('h3').first();
    bookinRefId = () => this.page.locator('.booking-ref');
    bookedCustomer = () => this.page.locator('span:has-text("Customer") + span');
    ticketsBooked = () => this.page.locator('span:has-text("Tickets") + span');


    async bookTickets(tickets: any) {
        
        let totalTicketCount = Number((await this.ticketCount().textContent())!.trim());
        while (totalTicketCount < tickets) {
            await this.ticketIncrementBtn().click();
            totalTicketCount = Number((await this.ticketCount().textContent())!.trim());
        }
    }

    async enterUserDetailsInForm(name: string, email: string, phoneNo: string) {
        await this.fullNameInput().fill(name);
        await this.emailInput().fill(email);
        await this.phoneNoInput().fill(phoneNo);
    }

    async getEventTicketPrice() {
        const ticketPrice = (await this.eventTicketPrice().textContent())?.trim();
        const price = ticketPrice?.split('$')[1];
        return price;
    }

    async getTotalPrice() {
        const totalPrice = (await this.totalTicketPrice().textContent())?.trim();
        const price = totalPrice?.split('$')[1].replace(',', '');
        return price;
    }

    async bookTheEvent() {
        await this.confirmBookingButton().click()
    }

    async getBookedCustomerName() {
        const customerName = (await this.bookedCustomer().textContent())?.trim();
        return customerName;
    }

    async getNoOfTicketBooked() {
        const noOfBookedTickets = (await this.ticketsBooked().textContent())?.trim();
        return noOfBookedTickets;
    }

}