import { Etat } from "./etat";
import { Partner } from "./partner";
import { User } from "./user";

export class Meeting {
    public id : Number;
    public date : string;
    public hour : Number;
    public message : string;
    public validity : Etat;
    public partner : Partner;
    public user : User;
    

}
