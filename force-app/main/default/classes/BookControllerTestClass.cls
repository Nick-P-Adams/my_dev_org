@IsTest
private class BookControllerTestClass 
{
    @IsTest
    static void validateBookDiscount() 
    {
        Book__c book = new Book__c(Name='Behind the Cloud', Price__c=100);
        System.debug('Price before inserting new book: ' + book.Price__c);
        
        insert book;
        
        book = [SELECT Price__c FROM Book__c WHERE Id =: book.Id];
        System.debug('Price after trigger fired: ' + book.Price__c);
        
        System.assertEquals(90, book.Price__c);
    }
}