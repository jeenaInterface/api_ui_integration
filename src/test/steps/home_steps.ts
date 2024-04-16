import { chromium, Page } from "playwright-core";
import HomePage from "../../pages/HomePage";
import { invokeBrowser } from "../../helper/browsers/browserManager";
import { Before, Then } from "@cucumber/cucumber";

let homePage: HomePage;


Then('Click on the queue menu', async function () {
    await homePage.clickQueueMenu();
});
