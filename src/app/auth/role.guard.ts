import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const actualRole = this.authService.currentUser?.role;

    if (actualRole !== expectedRole) {
      console.log('navigate to info');

      this.router.navigate(['info'], { relativeTo: this.route });
      return false;
    }
    console.log('navigate to admin');
    return true;
  }
}
