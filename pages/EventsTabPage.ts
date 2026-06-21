import { Page } from "@playwright/test";



export class EventsTabPage {
    constructor(private page: Page) { }


    upcomingEventsHeading = () => this.page.getByRole('heading', { name: 'Upcoming Events' });
    bookNowButton = () => this.page.getByRole('link', { name: 'Book Now' });
    searchInput = () => this.page.getByPlaceholder('Search events, venues…');


    async navigateToEventBookingPage() {
        await this.bookNowButton().click();
    }
}