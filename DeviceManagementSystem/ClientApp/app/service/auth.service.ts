import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    public isLoggedIn: boolean = JSON.parse(localStorage.getItem('loggedIn') || 'false')

    LoggingIn(value: boolean) {
        this.isLoggedIn = value;
        localStorage.setItem('loggedIn', 'true');
    }

    get isUserLoggedIn() {
        return JSON.parse(localStorage.getItem('loggedIn') || this.isLoggedIn.toString())
    }

    Login(loginInfo) {

        return this.http.post("api/account/login", loginInfo,
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    Register(registerInfo) {

        return this.http.post("api/account/register", registerInfo, {
            observe: 'response',
            responseType: 'json'
        });
    }

    Logout() {

        return this.http.post("api/account/logout", {
            observe: 'response',
            responseType: 'json'
        });
    }

    getUsers(): Observable<any> {

        return this.http.get("api/account/getusers", {
            observe: 'response',
            responseType: 'json'
        });
    }

    deleteUser(username) {

        return this.http.delete("api/account/deleteuser/" + username, {
            observe: 'response',
            responseType: 'text'
        });
    }
}
