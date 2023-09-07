import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly JWT_TOKEN = 'JWT_TOKEN';

    private isAuthSubject = new BehaviorSubject<boolean>(false);

    isAuth$ = this.isAuthSubject.asObservable();

    constructor(
        private readonly http: HttpClient,
        private readonly router: Router,
        private readonly toastrService: ToastrService
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
        // For github pages
        this.toastrService.success('User added successfully', 'Success');
        this.router.navigate(['login']);

        return of(true);

        // return this.http.post<any>(`/api/register`, user).pipe(
        //     tap(() => {
        //         this.toastrService.success(
        //             'User added successfully',
        //             'Success'
        //         );
        //         this.router.navigate(['login']);
        //     }),
        //     catchError((e: any) => {
        //         let errorMessage = 'Something went wrong';

        //         if (e.error) {
        //             errorMessage = e.error;
        //         }

        //         if (e.status == 404) {
        //             errorMessage = 'Something went wrong';
        //         }

        //         this.toastrService.error(errorMessage, 'Error');
        //         return errorMessage;
        //     })
        // );
    }

    login(user: User): Observable<any> {
        // For github pages
        this.isAuthSubject.next(true);
        localStorage.setItem(this.JWT_TOKEN, this.JWT_TOKEN);

        this.toastrService.success('Successfully logged in', 'Success');
        this.router.navigate(['app/dashboard']);

        return of(true);

        // return this.http.post<any>(`/api/login`, user).pipe(
        //     tap(data => {
        //         this.isAuthSubject.next(true);
        //         localStorage.setItem(this.JWT_TOKEN, data.accessToken);

        //         this.toastrService.success('Successfully logged in', 'Success');
        //         this.router.navigate(['app/dashboard']);
        //     }),
        //     catchError((e: any) => {
        //         let errorMessage = 'Something went wrong';

        //         if (e.error) {
        //             errorMessage = e.error;
        //         }

        //         if (e.status == 404) {
        //             errorMessage = 'Something went wrong';
        //         }

        //         this.toastrService.error(errorMessage, 'Error');
        //         return errorMessage;
        //     })
        // );
    }

    logout() {
        this.isAuthSubject.next(false);
        localStorage.removeItem(this.JWT_TOKEN);

        this.router.navigate(['/']);
    }
}
