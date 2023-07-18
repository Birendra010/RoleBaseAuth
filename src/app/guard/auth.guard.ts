import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  createUrlTreeFromSnapshot,
} from '@angular/router';
import { AuthService } from '../service/auth.service';


export const AuthGuard = (next:ActivatedRouteSnapshot) => {

let value = inject(AuthService).isLoggedIn();

return value ? true : createUrlTreeFromSnapshot(next,['/','login'])


}




