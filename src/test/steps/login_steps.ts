import { When, Then } from '@cucumber/cucumber';
import LoginPage from '../../pages/LoginPage';
import HomePage from '../../pages/HomePage';
import { fixture } from "../../hooks/pageFixture";

let loginPage: LoginPage;
let homePage: HomePage;

When('I log in with {string} and {string}', async function(username: string, password: string) {
    loginPage = new LoginPage(fixture.page)
    // loginPage = new LoginPage(this.page, this.context); 
    await loginPage.loginAndRedirectToDashboard(username, password);

});

Then('Click on the queue menu', async function () {
    await homePage.clickQuequemenu(); 
});
