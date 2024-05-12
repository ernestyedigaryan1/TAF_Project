import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { Dashboard } from '../po/pages/Dashboard';

const dashboardPage = new Dashboard();

When('I add a new dashboard', () => {
    dashboardPage.addNewDashboard();
});

When('I delete the dashboard', () => {
    dashboardPage.deleteDashboard();
});

When('I edit the dashboard', () => {
    cy.wait(500);
    dashboardPage.editDashboard();
});

Then('the dashboard should be added successfully', () => {
    dashboardPage.verifyDashboardAddedSuccessfully();
});

Then('the dashboard should be deleted successfully', () => {
    dashboardPage.verifyDashboardDeletedSuccessfully();
});

Then('the dashboard should be edited successfully', () => {
    dashboardPage.verifyDashboardEditedSuccessfully();
});

When(/^I fill dashboard popup inputs with name "(.*)" and "(.*)" and save$/, (name, description) => {
    dashboardPage.enterUniqueDashboardName(name);
    dashboardPage.enterUniqueDashboardDescription(description);
    dashboardPage.saveNewAddedDashboard();
});