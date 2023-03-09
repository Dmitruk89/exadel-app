import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Data,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService) {}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     const url: string = state.url;
//     const data: Data = route.data;
//     return this.checkLogin(url, data);
//   }

//   checkLogin(url: string, data: Data): boolean {
//     if (this.authService.isLoggedIn && data['role'] === 'admin') {
//       console.log('please come in!');
//       return true;
//     }

//     this.authService.redirectUrl = url;
//     console.log('please login as admin!');
//     return false;
//   }
// }

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(): boolean {
    if (!this.authService.isLoggedIn) {
      console.log('please login!');
      return false;
    }
    console.log('please come in!');
    return true;
  }
}
