import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  isLoggedIn = false;
  redirectUrl = '/';

  // login(): void {
  //   this.isLoggedIn = true;
  // }

  logout(): void {
    this.isLoggedIn = false;
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCjV88EL6hejzQDstLTC41N-Pa9g21y8kA',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        },
      )
      .pipe(catchError((errorRes) => this.handleError(errorRes)));
  }

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCjV88EL6hejzQDstLTC41N-Pa9g21y8kA',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        },
      )
      .pipe(catchError((errorRes) => this.handleError(errorRes)));
  }

  private handleError(errorRes: any) {
    let errorMessage = 'An unknown error occured!';
    console.log('!!!ERROR!!!', errorRes);

    if (!errorRes.error || !errorRes.error.error) {
      return throwError(() => new Error(errorMessage));
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email is already exist!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This emil does not exist';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is incorrect';
        break;
    }
    return throwError(() => new Error(errorMessage));
  }
}
