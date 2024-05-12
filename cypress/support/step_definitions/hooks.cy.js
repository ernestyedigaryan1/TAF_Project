import { Before } from '@badeball/cypress-cucumber-preprocessor'
import { LoginPage } from '../po/components/Login';

const loginPage = new LoginPage();

Before({ tags: '@login' }, () => {
    loginPage.visit();
    loginPage.enterCredentials();
    loginPage.clickSignIn();
})