trigger gi on Account (before insert) 
{
    System.debug('Hello world changed');
    System.debug('Second Line added');

}