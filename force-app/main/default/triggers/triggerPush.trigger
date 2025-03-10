trigger triggerPush on Account (before insert) 
{
    System.debug('Hello world');

}