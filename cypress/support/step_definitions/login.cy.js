import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { LoginPage } from '../po/components/Login';

const loginPage = new LoginPage();

Given(/^I am on the login page$/, () => {
    loginPage.visit();
});

When('I enter valid credentials and click sign in', () => {
    loginPage.enterCredentials();
    loginPage.clickSignIn();
});