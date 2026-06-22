import { APIRequestContext, expect } from '@playwright/test';

const baseURL = "https://api.eventhub.rahulshettyacademy.com/api/auth/login";

export class APIUtils {

    apiContext: APIRequestContext;
    token: string | null = null;

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext;
    }

    async getToken(): Promise<string> {

        if (this.token) {
            return this.token;
        }

        const response = await this.apiContext.post(baseURL, {
            data: {
                email: "signaturemusic12@gmail.com",
                password: "AssertSuccess@204"
            }

        });

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        const token = responseBody.token;

        if (!token) {
            throw new Error("Token not found");
        }

        this.token = token;

        return token; 
    }

}