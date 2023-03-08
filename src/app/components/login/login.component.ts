import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AuthResponseData, AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Observable } from 'rxjs';

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
  isLoginMode = true;
  isVisible = false;
  isLoading = false;

  onClick(event: MouseEvent): void {
    if (!(event.target as HTMLTextAreaElement).closest('.login_bar')) {
      this.hide();
    }
  }

  hide(): void {
    this.isVisible = false;
  }

  toggle(): void {
    this.isVisible = !this.isVisible;
  }

  // login(): void {
  //   this.authService.login();
  //   this.isLoggedIn = this.authService.isLoggedIn;
  // }

  // logout(): void {
  //   this.authService.logout();
  //   this.isLoggedIn = this.authService.isLoggedIn;
  //   this.router.navigate(['/']);
  // }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;

    let authObservable: Observable<AuthResponseData>;

    if (!form.valid) {
      return;
    }

    if (!this.isLoginMode) {
      authObservable = this.authService.signup(email, password);
      authObservable.subscribe({
        next: (res) => {
          console.log(res);
          this.isLoading = false;
        },
        error: (errorMessage) => {
          console.log(errorMessage);
          this.isLoading = false;
        },
      });
    }

    form.reset();
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
