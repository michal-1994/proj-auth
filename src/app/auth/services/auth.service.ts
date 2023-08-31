import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public readonly LOGIN_PATH = '/login';
    public readonly INITIAL_PATH = '/dashboard';

    constructor(
        private router: Router,
        private http: HttpClient
    ) {}

    signup(user: User): Observable<void> {
        return this.http.post<any>(`/api/users`, user);
    }

    login() {}

    logout() {}
}
