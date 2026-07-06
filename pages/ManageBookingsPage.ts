import { Page } from '@playwright/test';


export class ManageBookingPage {
    constructor(private page: Page) { }

    manageBookingHeading = () => this.page.getByRole('heading', { name: 'Manage Bookings' });
    confirmedText = () => this.page.locator('tbody tr').first().locator('td').nth(5);
    bookingViewButton = () => this.page.getByRole('button', { name: 'View' }).first();
    confirmTextDetailsWindow = () => this.page.locator("div[aria-labelledby='modal-title']  div.items-start span.inline-flex");
    bookingTitleDetailsWindow = () => this.page.locator("//span[text()='Title']/following-sibling::span");
    bookingCityDetailsWindow = () => this.page.locator("//span[text()='City']/following-sibling::span");
    bookingEmailDetailsWindow = () => this.page.locator("//span[text()='Email']/following-sibling::span");
    detailsWindowClosedBtn = () => this.page.locator("button[aria-label='Close']");

    async getEmailValueDetailsWindow() {
        const email = await this.bookingEmailDetailsWindow().textContent();
        return email;
    }

    async closeDetailsWindow() {
        await this.detailsWindowClosedBtn().click();
    }






}