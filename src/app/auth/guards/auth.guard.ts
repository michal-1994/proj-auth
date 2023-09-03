import { inject, Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivateFn,
    Router,
    RouterStateSnapshot
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard {
    isAuth: boolean = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
        this.authService.isAuth$.subscribe(isAuth => {
            this.isAuth = isAuth;
        });
    }

    canActivate(): boolean {
        if (!this.isAuth) {
            this.router.navigate(['/login']);
        }
        return true;
    }
}

export const canActivateAdminPanel: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    return inject(AuthGuard).canActivate();
};
