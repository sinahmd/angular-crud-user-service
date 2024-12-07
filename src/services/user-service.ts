import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {  User } from "../models/addUserModel";


@Injectable({providedIn:"root"})
export class UserService {
    constructor(private http: HttpClient) {
    }

    getUsers():Observable<any> {
        return this.http.get('http://localhost:3000/api/users')
    }
    addUser(user: User): Observable<any> {
        return this.http.post('http://localhost:3000/api/user/add', user, { responseType: 'text' });
    }
    editUser(user: User): Observable<any> {
        return this.http.put('http://localhost:3000/api/user/edit', user,  { responseType: 'text' });
    }
}   