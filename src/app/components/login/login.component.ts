import { Component, OnDestroy, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AuthResponseData, AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Observable, Subscription } from 'rxjs';

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
export class LoginComponent implements OnInit, OnDestroy {
  constructor(public authService: AuthService, public router: Router) {}
  user$!: Subscription;
  isLoggedIn = this.authService.isLoggedIn;
  isLoginMode = true;
  isVisible = false;
  isLoading = false;
  error = null;

  ngOnInit() {
    this.user$ = this.authService.user.subscribe((user) => {
      this.isLoggedIn = !!user;
    });
  }

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
    this.isLoading = true;
    this.error = null;
    const email = form.value.email;
    const password = form.value.password;

    let auth$: Observable<AuthResponseData>;

    if (!form.valid) {
      return;
    }

    if (this.isLoginMode) {
      auth$ = this.authService.login(email, password);
    } else {
      auth$ = this.authService.signup(email, password);
    }

    auth$.subscribe({
      next: (res) => {
        console.log(res);
        this.isLoading = false;
        this.router.navigate(['/user-page']);
      },
      error: (errorMessage) => {
        this.error = errorMessage;
        this.isLoading = false;
      },
    });

    form.reset();
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onLogOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.user$.unsubscribe();
  }
}
