import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { EventsPage } from '../pages/EventsPage';


export const test = base.extend<{
    page: Page;
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    eventsPage: EventsPage;

}>

    ({
        page: async ({ page }, use) => {
            await use(page);
        },

        loginPage: async ({ page }, use) => {
            const loginPage = new LoginPage(page);
            await use(loginPage)
        },
        dashboardPage: async ({ page }, use) => {
            const dashBoardPage = new DashboardPage(page);
            await use(dashBoardPage);
        },
        eventsPage: async ({ page }, use) => {
            const eventsPage = new EventsPage(page);
            await use(eventsPage);
        }



    })