import { LightningElement, api } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';

export default class ErrorPanel extends LightningElement {
   @api errors;
   
   // This code is patterned after the lwc-recipes found in the link below.
   // Reference: https://github.com/trailheadapps/lwc-recipes/blob/main/force-app/main/default/lwc/errorPanel/errorPanel.js
   get errorMessages() {
      return reduceErrors(this.errors);
  }
}