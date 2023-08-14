public class BookController
{
    public static void applyDiscount(Book__c[] books)
    {
        for(Book__c book :books)
        {
            book.Price__c *= 0.9;
        }
    }
}