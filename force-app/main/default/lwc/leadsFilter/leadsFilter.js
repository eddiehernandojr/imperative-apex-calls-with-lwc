import { LightningElement } from 'lwc';
import getAllLeads from '@salesforce/apex/LeadsController.getAllLeads';
import getOpenNotContactedLeads from '@salesforce/apex/LeadsController.getOpenNotContactedLeads';
import getWorkingContactedLeads from '@salesforce/apex/LeadsController.getWorkingContactedLeads';
import getClosedConvertedLeads from '@salesforce/apex/LeadsController.getClosedConvertedLeads';
import getClosedNotConvertedLeads from '@salesforce/apex/LeadsController.getClosedNotConvertedLeads';

import NAME_FIELD from '@salesforce/schema/Lead.Name';
import COMPANY_FIELD from '@salesforce/schema/Lead.Company';
import EMAIL_FIELD from '@salesforce/schema/Lead.Email';
import PHONE_FIELD from '@salesforce/schema/Lead.Phone';
import STATUS_FIELD from '@salesforce/schema/Lead.Status';

const COLUMNS = [
    { label: 'Name', fieldName: NAME_FIELD.fieldApiName },
    { label: 'Company', fieldName: COMPANY_FIELD.fieldApiName },
    { label: 'Email', fieldName: EMAIL_FIELD.fieldApiName, type: 'email' },
    { label: 'Phone', fieldName: PHONE_FIELD.fieldApiName, type: 'phone' },
    { label: 'Status', fieldName: STATUS_FIELD.fieldApiName },
];

export default class LeadsFilter extends LightningElement {
    columns = COLUMNS;
    leads;
    error;

    // This code is patterned after Handling Errors When Calling a Function Imperatively and
    // Handle Errors in the accountList Component which is found in the link below.
    // Reference:
    // https://trailhead.salesforce.com/en/content/learn/modules/lightning-web-components-and-salesforce-data/handle-server-errors?trail_id=build-lightning-web-components

    // When the handleClickAll method is invoked by the framework, we invoke the handleClickAll Apex method imperatively to get all leads.
    // The imperative Apex call returns a promise. If the Apex method call is successful, the promise is fulfilled and the then method runs. 
    // Otherwise, the promise is rejected and the catch method runs.
    handleClickAll() {
        this.processLeadsAndError(getAllLeads());
    }

    handleClickOpenNotContactedLeads() {
        this.processLeadsAndError(getOpenNotContactedLeads());
    }

    handleClickWorkingContactedLeads() {
        this.processLeadsAndError(getWorkingContactedLeads());
    }

    handleClickClosedConvertedLeads() {
        this.processLeadsAndError(getClosedConvertedLeads());
    }

    handleClickClosedNotConvertedLeads() {
        this.processLeadsAndError(getClosedNotConvertedLeads());
    }

    processLeadsAndError(prom) {
        prom.then(result => {
            this.leads = result;
            this.error = undefined;
        })
        .catch(error => {
            this.error = error;
            this.leads = undefined;
        });
    }
}