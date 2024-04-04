import { When, setDefaultTimeout } from "@cucumber/cucumber";
import { LoginPage } from "../../pages/LoginPage";
import { loginAPI } from "../../api/api_helpers";

setDefaultTimeout(60 * 1000 * 5);

let login: LoginPage;

When('I log in with {string} and {string}', async function(username: string, password: string) {
    const token = await loginAPI(username, password);
    login = new LoginPage(this.page, this.context); // Assuming `this.page` and `this.context` are available
    await login.loginWithToken(token);
});




