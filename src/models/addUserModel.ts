import { FormControl } from "@angular/forms";

export interface AddUser{
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    nationalCode: FormControl<number | null>
}

export interface UserList{
    firstName:string ;
    lastName:string ;
    nationalCode: number;
}