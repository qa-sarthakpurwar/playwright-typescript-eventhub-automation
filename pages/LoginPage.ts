import { Page, Locator } from '@playwright/test';

export class LoginPage {

    constructor(private page: Page) { }

    emailInput = () => this.page.getByRole('textbox', { name: 'Email' });
    passwordInput = () => this.page.getByRole('textbox', { name: 'Password' });
    signInButton = () => this.page.getByRole('button', { name: 'Sign In' });
    userEmailDisplay = () => this.page.locator('#user-email-display');
    myBookingsButton = () => this.page.getByRole('button', { name: 'My Bookings' })
    logOutButton = () => this.page.getByRole('button', { name: 'Logout' });


    async login(userEmail: string, password: string) {
        await this.emailInput().fill(userEmail);
        await this.passwordInput().fill(password);
        await this.signInButton().click();

    }


}