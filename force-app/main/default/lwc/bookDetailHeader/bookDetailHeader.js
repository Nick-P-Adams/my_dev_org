import { LightningElement, api, wire } from 'lwc';


const fields = [
    'Book.Name'
];
export default class BookDetailHeader extends LightningElement {}    @wire(getRecord, { recordId: '$recordId', fields})
    book;
    get name() {
        return this.contact.data.fields.Name.value;
    }
