import { BasePage } from "./BasePage";
import {uniqueNumber} from "../../utility/generator";

export class Dashboard extends BasePage{
    constructor() {
        super()
        this.editedDashboardName = ''; // Initialize a variable to store the edited dashboard name
    }
    get 'successfully signin msg'() {
        return this.getElementThatContains('Signed in successfully');
    }

    get 'add new dashboard button'() {
        return cy.get('.addDashboardButton__add-dashboard-btn--acseh button');
    }

    get 'new dashboard name from popup'() {
        return cy.get('[placeholder="Enter dashboard name"]');
    }

    get 'new dashboard name from description'() {
        return cy.get('textarea[placeholder="Enter dashboard description"]');
    }

    get 'add dashboard button from popup'() {
        return cy.get('button[class^="bigButton__big-button"]').contains('Add');
    }

    get 'dashboard added successfully'() {
        return this.getElementThatContains('Dashboard has been added');
    }

    get 'dashboard deleted successfully'() {
        return this.getElementThatContains('Dashboard has been deleted');
    }

    get 'edit dashboard button'() {
        return this.getElementThatContains('Edit');
    }

    get 'update button from edit popup'() {
        return cy.get('button[class^="bigButton__big-button"]').contains('Update');
    }

    get 'delete dashboard button'() {
        return cy.get('button[class^="ghostButton__ghost-button"]').contains('Delete');
    }

    get 'full screen dashboard button'() {
        return cy.get('button[class^="ghostButton__ghost-button"]').contains('Full screen');
    }

    get 'add new widget'() {
        return cy.get('button[class^="ghostButton__ghost-button"]').contains('Add new widget');
    }

    get 'dashboard name from menu'() {
        return cy.get('ul[class^="pageBreadcrumbs__page-breadcrumbs"] span');
    }

    get 'confirm delete button'() {
        return cy.get('button[class^="bigButton__big-button"]').contains('Delete');
    }

    addNewDashboard() {
        this['add new dashboard button'].click();
    }

    enterUniqueDashboardName(baseName) {
        const uniqueName = `${baseName}_${uniqueNumber}`; // Combine baseName and timestamp
        this['new dashboard name from popup'].type(uniqueName); // Type the unique name into the field
        cy.wait(500)
    }

    enterUniqueDashboardDescription(baseName) {
        const uniqueName = `${baseName}_${uniqueNumber}`; // Combine baseName and timestamp
        this['new dashboard name from description'].type(uniqueName); // Type the unique name into the field
        cy.wait(500)
    }

    saveNewAddedDashboard(){
        this['add dashboard button from popup'].click()
    }

    deleteDashboard() {
        this['delete dashboard button'].click();
        this['confirm delete button'].click();
    }

    editDashboard(name, description) {
        this.editedDashboardName = name;
        this['edit dashboard button'].click()
        this.enterUniqueDashboardName(name)
        this.enterUniqueDashboardDescription(description)
        this['update button from edit popup'].click()
    }

    verifyDashboardAddedSuccessfully() {
        this['dashboard added successfully'].should('be.visible');
    }

    verifyDashboardDeletedSuccessfully() {
        this['dashboard deleted successfully'].should('be.visible');
    }

    verifyDashboardEditedSuccessfully() {
        this['dashboard name from menu'].should('have.text', this.editedDashboardName);
    }

}