import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


export class PageObjectManager {

    private page: Page;
    private loginPage!: LoginPage;

    constructor(page: Page) {
        this.page = page;
    }


    getLoginPage(): LoginPage {
        if (!this.loginPage) { this.loginPage = new LoginPage(this.page); }
        return this.loginPage;
    }

}