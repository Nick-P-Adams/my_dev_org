import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const fields = [
    'Book__c.Name',
    'Book__c.Author__c',
    'Book__c.Publisher__c',
    'Book__c.ISBN__c',
    'Book__c.Book_Summary__c',
    'Book__c.Price__c',
    'Book__c.Completed__c',
    'Book__c.Book_URL__c',
    'Book__c.Image__c',
    'Book__c.OwnerId',
    'Book__c.Published_Date__c',
    'Book__c.CreatedById',
    'Book__c.LastModifiedById'
];

export default class BookDetailHeader extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields })
    book;
    
    get name() {
        return this.book.data.fields.Name.value;
    }
    get author() {
        return this.book.data.fields.Author__c.value;
    }
    get publisher() {
        return this.book.data.fields.Publisher__c.value;
    }
    get isbn() {
        return this.book.data.fields.ISBN__c.value;
    }
    get summary() {
        return this.book.data.fields.Book_Summary__c.value;
    }
    get price() {
        return this.book.data.fields.Price__c.value;
    }
    get completed() {
        return this.book.data.fields.Completed__c.value;
    }
    get website() {
        return this.book.data.fields.Book_URL__c.value;
    }
    get image() {
        return this.book.data.fields.Image__c.value;
    }
    get owner() {
        return this.book.data.fields.OwnerId.value;
    }
    get published() {
        return this.book.data.fields.Published_Date__c.value;
    }
    get createdBy() {
        return this.book.data.fields.CreatedById.value;
    }
    get modifiedBy() {
        return this.book.data.fields.ModifiedById.value;
    }
}