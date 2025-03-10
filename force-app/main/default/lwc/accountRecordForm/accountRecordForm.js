import { LightningElement, api } from 'lwc';

export default class AccountRecordForm extends LightningElement {
    // Record ID to fetch and update the Account
    @api recordId;

    // Handle success after saving the record
    handleSuccess(event) {
        const updatedRecordId = event.detail.id;
        // Display a success toast
        this.showToast('Success', 'Record updated successfully!', 'success');
        console.log('Updated Record ID: ', updatedRecordId);
    }

    // Utility to show toast messages
    showToast(title, message, variant) {
        const toastEvent = new ShowToastEvent({
            title,
            message,
            variant
        });
        this.dispatchEvent(toastEvent);
    }
}
