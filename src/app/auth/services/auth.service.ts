import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {}

    signup(user: User): Observable<void> {
        return this.http.post<any>(`/api/users`, user);
    }

    login() {}

    logout() {}
}
