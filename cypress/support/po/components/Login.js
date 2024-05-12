import BasePage from "../pages/BasePage";
import {getBaseUrl, getCredentials} from "../../utility/getCredentials";

const { username, password } = getCredentials();
const baseUrl = getBaseUrl();

export class LoginPage extends BasePage {

    get 'login input'() {
        return cy.get('input[placeholder="Login"]');
    }

    get 'password input'() {
        return cy.get('input[placeholder="Password"]');
    }

    get 'sign in button'() {
        return cy.get('button[type="submit"]');
    }

    visit() {
        cy.visit(baseUrl);
    }

    enterCredentials() {
        this['login input'].type(username);
        this['password input'].type(password);
    }

    clickSignIn() {
        this['sign in button'].click();
    }
}