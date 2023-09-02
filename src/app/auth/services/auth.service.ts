import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private userLogged!: User | null;

    constructor(private http: HttpClient) {}

    signup(user: User): Observable<User> {
        return this.http.post<any>(`/api/register`, user);
    }

    login(user: User): Observable<User> {
        return this.http
            .post<any>(`/api/login`, user)
            .pipe(tap(data => this.setUserLogged(data)));
    }

    logout() {}

    setUserLogged(user: User) {
        this.userLogged = user;
    }

    setUserLogout() {
        this.userLogged = null;
    }
}
