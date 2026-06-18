import { test as base, Page} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


export const test = base.extend<{
    loginPage: LoginPage;
    page: Page;
}>

    ({
        page: async ({ page }, use) => {
            await use(page);
        },

        loginPage: async ({ page }, use) => {
            const loginPage = new LoginPage(page);
            await use(loginPage)
        },



    })