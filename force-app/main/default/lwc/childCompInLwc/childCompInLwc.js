import { LightningElement,api } from 'lwc';

export default class ChildCompInLwc extends LightningElement 
{
    @api childProperty;
}