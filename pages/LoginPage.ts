import { Page} from '@playwright/test';

export class LoginPage {

    constructor(private page: Page) { }

    emailInput = () => this.page.getByRole('textbox', { name: 'Email' });
    passwordInput = () => this.page.getByRole('textbox', { name: 'Password' });
    signInButton = () => this.page.getByRole('button', { name: 'Sign In' });
    userEmailDisplay = () => this.page.locator('#user-email-display');
    myBookingsButton = () => this.page.getByRole('button', { name: 'My Bookings' })
    logOutButton = () => this.page.getByRole('button', { name: 'Logout' });
    invalidEmailMsg = () => this.page.locator('#email + p');
    invalidEmailPasswordMsg = () => this.page.getByText('Invalid email or password');
    signInToEventHubText = () => this.page.getByRole('heading', { name: 'Sign in to EventHub' });


    async navigateToLoginPage() {
        await this.page.goto('/login');
    }

    async login(validUser: any) {
        await this.emailInput().fill(validUser.email);
        await this.passwordInput().fill(validUser.password);
        await this.signInButton().click();
    }






}