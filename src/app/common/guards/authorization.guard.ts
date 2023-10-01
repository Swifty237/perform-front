import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/spring-services/auth.service';

export const authorizationGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {

    if (inject(AuthService).roles.includes("ADMIN")) {
        return true;
    } else {
        return false;
    }
};


// { path: 'ngr-profile', component: ProfileComponent, canActivate: [authorizationGuard], data: {role: "ADMIN"}} => exemple utilisation dans le routing module