import { Page } from 'playwright';
import { loginAPI } from '../api/api_helpers';
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class LoginPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        dashboardLabel: "//a[contains(text(),'Dashboard')]",
    }

    async loginAndRedirectToDashboard(username: string, password: string) {
        const token = await loginAPI(username, password);
        await this.base.goto("http://apmtest.interfacesys.com/#/nav/dashboard")
        // await this.page.waitForLoadState();
        
        // console.info("Waiting for 2 seconds");
        // await this.page.waitForTimeout(5000);
        const dashboardLabel = await this.page.locator(this.Elements.dashboardLabel);

        if(dashboardLabel.isVisible){
          
            console.log("Redirected to dashboard")
        } else
        {
            console.error("Error navigating to dashboard page");
        }
        
        console.info("Waiting for 2 seconds");
        await this.page.waitForTimeout(5000);
        
        // await this.redirectToDashboard();
    }
    
    private async loginWithToken(token: string) {
        await this.page.goto("https://apmtest.interfacesys.com/#/login");
        // You can handle adding cookies here if needed
    }

    private async redirectToDashboard() {
       await this.page.goto("https://apmtest.interfacesys.com/#/nav/dashboard");
    }
}
