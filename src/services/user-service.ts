import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AddUser, UserList } from "../models/addUserModel";


@Injectable({providedIn:"root"})
export class UserService {
    constructor(private http: HttpClient) {
    }

    getUsers():Observable<any> {
        return this.http.get('http://localhost:3000/api/users')
    }
    // addUser(user: UserList): Observable<any> {
    //     return this.http.post('http://localhost:3000/api/user/add', user);
    // }
    addUser(user: AddUser): Observable<any> {
        return this.http.post('http://localhost:3000/api/user/add', user, { responseType: 'text' });
    }
    editUser(user: AddUser): Observable<any> {
        return this.http.put('http://localhost:3000/api/user/edit', user,  { responseType: 'text' });
    }
    getUserByNationalCode(nationalCode: number): Observable<any> {
        return this.http.get(`http://localhost:3000/api/user/${nationalCode}`);
    }
}   