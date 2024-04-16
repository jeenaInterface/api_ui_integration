import { Page, BrowserContext } from "playwright-core";
import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(60 * 2000);

export default class HomePage {
    public page: Page;
    private context: BrowserContext;

    constructor(page: Page) {
        this.page = page;
    }

    private Elements = {
        QueueMenu: "//a[contains(text(),'Queue')]",
    }

    async clickQueueMenu() {
        
        await this.page.goto("https://apmtest.interfacesys.com/#/nav/dashboard");
        await this.page.click(this.Elements.QueueMenu);
    }
}
