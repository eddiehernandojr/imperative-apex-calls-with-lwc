import { LightningElement, wire } from 'lwc';
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
    
    @wire(getAllLeads)
    allLeads;

    @wire(getOpenNotContactedLeads)
    openNotContactedLeads;

    @wire(getWorkingContactedLeads)
    workingContactedLeads;

    @wire(getClosedConvertedLeads)
    closedConvertedLeads;

    @wire(getClosedNotConvertedLeads)
    closedNotConvertedLeads;

    // TODO1: Create 5 event handlers, one for each method in the Apex controller. 
    // TODO2: Ensure that any error in the event handlers are caught.
    handleClickAll(event) {
        const { data, error } = this.allLeads;

        if (data) {
            this.leads = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.leads = undefined;
        }
    }

    handleClickOpenNotContactedLeads(event) {
        const { data, error } = this.openNotContactedLeads;

        if (data) {
            this.leads = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.leads = undefined;
        }
    }

    handleClickWorkingContactedLeads(event) {
        const { data, error } = this.workingContactedLeads;

        if (data) {
            this.leads = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.leads = undefined;
        }
    }
    
    handleClickClosedConvertedLeads(event) {
        const { data, error } = this.closedConvertedLeads;

        if (data) {
            this.leads = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.leads = undefined;
        }
    }

    handleClickClosedNotConvertedLeads(event) {
        const { data, error } = this.closedNotConvertedLeads;

        if (data) {
            this.leads = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.leads = undefined;
        }
    }
}