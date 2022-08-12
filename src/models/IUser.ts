import {IContact} from "./IContact";

export interface IUser extends IContact{
    user: IContact,
    accessToken: string
}