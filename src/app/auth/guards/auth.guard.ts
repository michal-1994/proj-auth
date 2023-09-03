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
    constructor(
        private service: AuthService,
        private router: Router
    ) {}

    canActivate(): boolean {
        const isAuth = this.service.userLogged;
        if (!isAuth) {
            this.router.navigate(['/']);
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
