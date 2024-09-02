import { Injectable } from '@angular/core';
import {
    CanActivateFn,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivate,
} from '@angular/router';
import { LoginService } from './login.service'; // Import your login service

@Injectable({
    providedIn: 'root',
})
export class authenticationGuard implements CanActivate {
    constructor(private loginService: LoginService, private _router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | any {
        if (!this.loginService.isLogin) {
            console.log('not logged in');
            this._router.navigate(['/auth/login']); // Redirect to login page if not logged in
            return false;
        }
        return true;
    }
}
