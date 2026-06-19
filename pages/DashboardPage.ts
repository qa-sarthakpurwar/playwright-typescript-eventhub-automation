import { Page } from '@playwright/test';


export class DashboardPage {
    constructor(private page: Page) { }


    adminTab = () => this.page.getByRole('button', { name: 'Admin' });
    manageEventsOption = () => this.page.getByRole('link', { name: 'Manage Events' });



    async navigateToManageEvents() {

        await this.adminTab().click();
        await this.manageEventsOption().first().click();

    }


}