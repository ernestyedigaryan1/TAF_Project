import { Locator, Page } from '@playwright/test';
import BasePage from "./BasePage";
const logger = require('../logger');

export class DashboardPage extends BasePage{
    readonly page: Page;
    readonly successfullySignInMsg: Locator;
    readonly addNewDashboardButton: Locator;
    readonly newDashboardNameFromPopup: Locator;
    readonly description: Locator;
    readonly addDashboardButtonFromPopup: Locator;
    readonly dashboardAddedSuccessfully: Locator;
    readonly editDashboardButton: Locator;
    readonly deleteDashboardButton: Locator;
    readonly dashboardDeletedSuccessfully: Locator;
    readonly fullScreenDashboardButton: Locator;
    readonly addNewWidget: Locator;
    readonly dashboardNameFromMenu: Locator;
    readonly confirmDeleteButton: Locator;
    readonly updateButtonFromEditPopup: Locator;

    constructor(page) {
        super(page);
        this.successfullySignInMsg = page.getByText('Signed in successfully');
        this.addNewDashboardButton = page.locator('.addDashboardButton__add-dashboard-btn--acseh button')
        this.newDashboardNameFromPopup = page.getByPlaceholder('Enter dashboard name');
        this.description = page.locator('textarea[placeholder="Enter dashboard description"]');
        this.addDashboardButtonFromPopup = page.locator('button[class^="bigButton__big-button"]').getByText('Add');
        this.dashboardAddedSuccessfully = page.getByText('Dashboard has been added');
        this.dashboardDeletedSuccessfully = page.getByText('Dashboard has been deleted');
        this.editDashboardButton = page.locator('button[class^="ghostButton__ghost-button"]').getByText('Edit');
        this.updateButtonFromEditPopup = page.locator('button[class^="bigButton__big-button"]').getByText('Update');
        this.deleteDashboardButton = page.locator('button[class^="ghostButton__ghost-button"]').getByText('Delete');
        this.fullScreenDashboardButton = page.locator('button[class^="ghostButton__ghost-button"]').getByText('Full screen');
        this.addNewWidget = page.locator('button[class^="ghostButton__ghost-button"]').getByText('Add new widget');
        this.dashboardNameFromMenu = page.locator('ul[class^="pageBreadcrumbs__page-breadcrumbs"] span');
        this.confirmDeleteButton = page.locator('button[class^="bigButton__big-button"]').getByText('Delete');;
    }

    async addNewDashboard(){
        await this.addNewDashboardButton.click();
    }

    async deleteDashboard(){
        await this.deleteDashboardButton.click();
        await this.confirmDeleteButton.click();
        logger.info('Dashboard is deleted');
    }

    async fillDashboardPopupInputsAndSave(dashboardObj){
        await this.newDashboardNameFromPopup.fill(dashboardObj.dashboardName);
        await this.description.fill(dashboardObj.description);
        await this.addDashboardButtonFromPopup.click();
    }
    async updateDashboardPopupInputsAndSave(dashboardObj ){
        await this.newDashboardNameFromPopup.fill(dashboardObj.dashboardName);
        if (dashboardObj.description){
            await this.description.fill(dashboardObj.description);
        }
        await this.updateButtonFromEditPopup.click();
    }
}
