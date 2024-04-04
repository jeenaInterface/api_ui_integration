import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";
import { BrowserContext } from 'playwright';


export class LoginPage {
    page: Page;
    context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
    }

    async loginWithToken(token: string) {
        await this.page.goto(process.env.BASEURLCOPSADMINLITE);
        await this.context.addCookies([{ name: 'auth_token', value: token }]);
    }
}
