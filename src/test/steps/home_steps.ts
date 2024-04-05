
import { Then } from '@cucumber/cucumber';
import HomePage from '../../pages/HomePage';


let homePage: HomePage;

// Define the step definition for clicking on the queue menu
Then('Click on the queue menu', async function () {
    // Instantiate HomePage if not already done
    if (!homePage) {
        homePage = new HomePage(this.page); 
    }
    
    // Call the method to click on the queue menu
    await homePage.clickQuequemenu(); 
});
