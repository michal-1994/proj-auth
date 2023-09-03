import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly JWT_TOKEN = 'JWT_TOKEN';

    private isAuthSubject = new BehaviorSubject<boolean>(false);

    isAuth$ = this.isAuthSubject.asObservable();

    constructor(
        private readonly http: HttpClient,
        private readonly router: Router
    ) {
        this.checkAuthentication();
    }

    private checkAuthentication() {
        const token = localStorage.getItem(this.JWT_TOKEN);
        if (token) {
            this.isAuthSubject.next(true);
        } else {
            this.isAuthSubject.next(false);
        }
    }

    signup(user: User): Observable<any> {
        return this.http.post<any>(`/api/register`, user);
    }

    login(user: User): Observable<any> {
        return this.http.post<any>(`/api/login`, user).pipe(
            tap(data => {
                this.isAuthSubject.next(true);
                localStorage.setItem(this.JWT_TOKEN, data.accessToken);
            })
        );
    }

    logout() {
        this.isAuthSubject.next(false);
        localStorage.removeItem(this.JWT_TOKEN);

        this.router.navigate(['/']);
    }
}
