import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { ManageEventsPage } from '../pages/ManageEventsPage';
import { EventsTabPage } from '../pages/EventsTabPage';
import { EventBookingPage } from '../pages/EventBookingPage';


export const test = base.extend<{
    page: Page;
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    manageEventsPage: ManageEventsPage;
    eventsTabPage: EventsTabPage;
    eventBookingPage: EventBookingPage;

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
        manageEventsPage: async ({ page }, use) => {
            const manageEventsPage = new ManageEventsPage(page);
            await use(manageEventsPage);
        },
        eventsTabPage: async ({ page }, use) => {
            const eventsTabPage = new EventsTabPage(page);
            await use(eventsTabPage);
        },
        eventBookingPage: async ({ page }, use) => {
            const eventBookingPage = new EventBookingPage(page);
            await use(eventBookingPage);
        }




    })