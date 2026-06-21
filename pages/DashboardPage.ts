import { Page } from '@playwright/test';


export class DashboardPage {
    constructor(private page: Page) { }


    adminTab = () => this.page.getByRole('button', { name: 'Admin' });
    manageEventsOption = () => this.page.getByRole('link', { name: 'Manage Events' });
    featuredEventsHeading = () => this.page.getByRole('heading', { name: 'Featured Events' });
    viewAllLink = () => this.page.locator("a:has-text('View all')");



    async navigateToManageEvents() {

        await this.adminTab().click();
        await this.manageEventsOption().first().click();

    }

    async navigateToAllEvents() {
        await this.viewAllLink().click();
    }


}