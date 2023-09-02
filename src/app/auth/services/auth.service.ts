import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {}

    signup(user: User): Observable<any> {
        return this.http.post<any>(`/api/register`, user);
    }

    login(user: User): Observable<any> {
        return this.http.post<any>(`/api/login`, user);
    }

    logout() {}
}
