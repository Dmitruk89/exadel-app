import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('openClose', [
      transition('open <=> closed', [animate('.3s')]),
      state(
        'open',
        style({
          right: '0',
        }),
      ),
      state(
        'closed',
        style({
          right: '-100vw',
        }),
      ),
    ]),
  ],
})
export class LoginComponent {
  constructor(public authService: AuthService, public router: Router) {}
  isLoggedIn = this.authService.isLoggedIn;
  isVisible = false;

  onClick(event: MouseEvent): void {
    console.log((event.target as HTMLTextAreaElement).closest('.login_nav__item'));
    if (!(event.target as HTMLTextAreaElement).closest('.login_nav__item')) {
      this.hide();
    }
  }

  hide(): void {
    this.isVisible = false;
  }

  toggle(): void {
    this.isVisible = !this.isVisible;
  }

  login(): void {
    this.authService.login();
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = this.authService.isLoggedIn;
    this.router.navigate(['/']);
  }
}
