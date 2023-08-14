trigger DiscountBook on Book__c (before insert) 
{
    Book__c[] books = Trigger.new;
    
    BookController.applyDiscount(books);
}