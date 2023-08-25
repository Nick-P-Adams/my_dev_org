import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import generateUserURL from '@salesforce/apex/URLFactory.generateUserURL';

const fields = [
    'User.Name'
];

export default class OwnerRecordLink extends LightningElement {
    @api recordId;
    userName = 'Undefined';
    userURL = '';

    @wire(generateUserURL, { userId: '$recordId' })
    url({error, data}) {
        if(data) { 
            this.userURL = data;
            console.log('Made it URL: ', this.userURL);
        } else if(error) {
            console.error('Error Returning URL:', error);
        }
    }

    @wire(getRecord, { recordId: '$recordId', fields })
    user({error, data}) {
        if(data) {
            this.userName = data.fields.Name.value;
            console.log('User Data:', data);
        } else if(error) {
            console.error('Error fetching user data:', error);
        }
    }
}