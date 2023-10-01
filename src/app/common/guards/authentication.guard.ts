import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/spring-services/auth.service';
import { inject } from '@angular/core';


export const authenticationGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {

  if (inject(AuthService).isAuthenticated == true) {
    return true;
  }

  inject(Router).navigateByUrl("/ngr-login");
  return false;
};
