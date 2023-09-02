import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly JWT_TOKEN = 'JWT_TOKEN';

    userLogged!: User | null;

    constructor(private http: HttpClient) {}

    signup(user: User): Observable<any> {
        return this.http.post<any>(`/api/register`, user);
    }

    login(user: User): Observable<any> {
        return this.http
            .post<any>(`/api/login`, user)
            .pipe(tap(data => this.setUserLogged(data)));
    }

    logout() {
        this.setUserLogout();
    }

    setUserLogged(user: any) {
        this.userLogged = user;
        localStorage.setItem(this.JWT_TOKEN, user.accessToken);
    }

    setUserLogout() {
        this.userLogged = null;
        localStorage.removeItem(this.JWT_TOKEN);
    }
}
