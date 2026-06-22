import { test as base, Page, request } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { ManageEventsPage } from '../pages/ManageEventsPage';
import { EventsTabPage } from '../pages/EventsTabPage';
import { EventBookingPage } from '../pages/EventBookingPage';
import { APIUtils } from '../Utils/APIUtils';


export const test = base.extend<{
    page: Page;
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    manageEventsPage: ManageEventsPage;
    eventsTabPage: EventsTabPage;
    eventBookingPage: EventBookingPage;
    token: string;

}>

    ({
        page: async ({ page, token }, use) => {
            await page.addInitScript((token) => {
                window.localStorage.setItem('eventhub_token', token);
            }, token);

            await page.goto("https://eventhub.rahulshettyacademy.com/");
            await use(page);
        },
        
        token: async ({ }, use) => {
            const apiContext = await request.newContext();
            const apiUtils = new APIUtils(apiContext)
            const token = await apiUtils.getToken();
            await use(token);
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