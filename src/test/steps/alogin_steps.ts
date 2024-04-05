import { When } from '@cucumber/cucumber';
import LoginPage from '../../pages/LoginPage';
import { fixture } from "../../hooks/pageFixture";
import { chromium } from 'playwright';

let loginPage: LoginPage;


When('I log in with {string} and {string}', async function(username: string, password: string) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const context = page.context();
    loginPage = new LoginPage(page, context);
    // loginPage = new LoginPage(this.page, this.context); // Pass both page and context from fixture
    await loginPage.loginAndRedirectToDashboard(username, password);
});
