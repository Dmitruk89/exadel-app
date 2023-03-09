import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router,
    private route: ActivatedRoute,
  ) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const actualRole = this.authService.currentUser?.role;

    if (actualRole !== expectedRole) {
      console.log('welcome user!');

      this.router.navigate(['user-page/info']);
      return false;
    }
    console.log('welcome admin!');
    return true;
  }
}
