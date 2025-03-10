trigger gi on Account (before insert) 
{
    System.debug('Hello world changed');

}