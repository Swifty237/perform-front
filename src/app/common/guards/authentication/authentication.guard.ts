import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { AuthService } from '../../services/spring-backend/auth.service';


export const authenticationGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {

  if (inject(AuthService).isAuthenticated == true) {
    return true;
  }

  inject(Router).navigateByUrl("/ngr-errorAuthen");
  return false;
};
