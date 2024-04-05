import { Page, BrowserContext } from 'playwright';
import { loginAPI } from '../api/api_helpers';

export default class LoginPage {
    private page: Page;
    private context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
    }

    async loginAndRedirectToDashboard(username: string, password: string) {
        const token = await loginAPI(username, password);
        await this.loginWithToken(token);
        await this.redirectToDashboard();
    }

    private async loginWithToken(token: string) {
        await this.context.addCookies([{ name: 'auth_token', value: token }]);
        if (!this.context) {
            throw new Error('Browser context is undefined');
        }
        await this.page.goto("https://apmtest.interfacesys.com/");
        // await this.context.addCookies([{ name: 'auth_token', value: token }]);
    }

    private async redirectToDashboard() {
        // Assuming the dashboard URL is 'https://apmtest.interfacesys.com/dashboard'
        await this.page.goto("https://apmtest.interfacesys.com/dashboard");
    }
}
