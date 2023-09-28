import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// export const authorizationGuard: CanActivateFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ):
//   Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {

//   return inject(TokenService).authenticated()
//     ? true
//     : inject(Router).createUrlTree(['/auth/login']);

// };
