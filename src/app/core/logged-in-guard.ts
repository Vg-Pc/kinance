import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Session } from './index';
import * as appGlobal from '../app.const';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private router: Router) {

    }

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (Session && Session.user.isAuthentication()) {
            return true;
        }
        this.router.navigate([appGlobal.loginUrl], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
