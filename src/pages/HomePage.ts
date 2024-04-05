import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";


export default class HomePage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        QueueMenu: "//a[contains(text(),'Queue')]",
    }

    async clickQuequemenu() {
        await this.base.waitAndClick(this.Elements.QueueMenu);
    }
}