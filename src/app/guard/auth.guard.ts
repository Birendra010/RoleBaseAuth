import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  createUrlTreeFromSnapshot,
} from '@angular/router';
import { AuthService } from '../service/auth.service';

// import { CanActivateFn,ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree } from '@angular/router';

export const AuthGuard = (next:ActivatedRouteSnapshot) => {

let value = inject(AuthService).isLoggedIn();

return value ? true : createUrlTreeFromSnapshot(next,['/','login'])
}





// import { inject } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   createUrlTreeFromSnapshot,
// } from '@angular/router';
// import { UserService } from '../reactiveForm/user.service';

// export const authGuard = (next: ActivatedRouteSnapshot) => {
  

//   let value = inject(UserService).isLoggedIn();

//   return value ? true :createUrlTreeFromSnapshot(next, ['/', 'login'])

// };