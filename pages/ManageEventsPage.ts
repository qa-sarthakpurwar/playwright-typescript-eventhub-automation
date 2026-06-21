import { Page } from "@playwright/test";



export class ManageEventsPage {
    constructor(private page: Page) { }


    eventLimitText = () => this.page.locator('h2 + div');
    eventTitleInput = () => this.page.getByPlaceholder('Event title');
    eventCategory = () => this.page.locator('#category');
    eventCity = () => this.page.getByPlaceholder('e.g. Bangalore');
    eventVenue = () => this.page.getByPlaceholder('Venue name & address');
    eventDateTime = () => this.page.locator('label:has-text("Event Date & Time") + input');
    eventPriceInput = () => this.page.locator('label:has-text("Price ($)") + input');
    eventTotalSeats = () => this.page.locator('#total-seats');
    eventImageInput = () => this.page.locator('input[type=url]');
    addEventButton = () => this.page.locator("#add-event-btn");
    eventCreatedToastMsg = () => this.page.getByText('Event created!');


    async enterNewEventDetails(event:any) {
        await this.eventTitleInput().fill(event.title);
        await this.eventCategory().selectOption(event.category);
        await this.eventCity().fill(event.city);
        await this.eventVenue().fill(event.venue);
        await this.eventDateTime().fill(event.dateTime);
        await this.eventPriceInput().fill(event.price);
        await this.eventTotalSeats().fill(event.seats);
        await this.eventImageInput().fill(event.imageUrl);
    }





}