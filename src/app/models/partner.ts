import { PartnerType } from "./partner-type";

export class Partner {
    public id:number;
    public email:String;
    public password:String;
    public passwordConfirm:String;
    public note:String;
    public name:String;
    public SubscriptionDate:Date;
    public type:PartnerType;
    public isDesactivate:Boolean;
    public counterLogin:Number;
    public accessToken:String;
}
