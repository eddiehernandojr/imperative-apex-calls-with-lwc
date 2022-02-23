//TODO 4: Necessary imports
import { LightningElement, wire } from 'lwc';
import getAllLeads from '@salesforce/apex/LeadsController.getAllLeads';
import getOpenNotContactedLeads from '@salesforce/apex/LeadsController.getOpenNotContactedLeads';
import getWorkingContactedLeads from '@salesforce/apex/LeadsController.getWorkingContactedLeads';
import getClosedConvertedLeads from '@salesforce/apex/LeadsController.getClosedConvertedLeads';
import getClosedNotConvertedLeads from '@salesforce/apex/LeadsController.getClosedNotConvertedLeads';

//TODO 5: Specify the fields to be used for the columns
const COLUMNS = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Company', fieldName: 'Company' },
    { label: 'Email', fieldName: 'Email', type: 'email' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Status', fieldName: 'Status' },
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

    //TODO 6: Create an event handler for each Apex method

    handleClickAll(event) {
        this.leads = this.allLeads.data;
    }

    handleClickOpenNotContactedLeads(event) {
        this.leads = this.openNotContactedLeads.data;
    }

    handleClickWorkingContactedLeads(event) {
        this.leads = this.workingContactedLeads.data;
    }
    
    handleClickClosedConvertedLeads(event) {
        this.leads = this.closedConvertedLeads.data;
    }

    handleClickClosedNotConvertedLeads(event) {
        this.leads = this.closedNotConvertedLeads.data;
    }
}