export default class BasePage{
    getElementThatContains(text) {
        return cy.contains(text);
    }
}