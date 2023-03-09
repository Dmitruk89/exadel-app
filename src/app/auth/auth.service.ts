import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Subject, tap, throwError } from 'rxjs';
import { User } from './user.model';

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

  user = new Subject<User | null>();
  currentUser: User | null = null;
  isLoggedIn = false;
  redirectUrl = '/';

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
      .pipe(
        catchError((errorRes) => this.handleError(errorRes)),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn,
          );
        }),
      );
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
      .pipe(
        catchError((errorRes) => this.handleError(errorRes)),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn,
          );
        }),
      );
  }

  logout() {
    this.isLoggedIn = false;
    this.user.next(null);
    localStorage.removeItem('userData');
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.currentUser = user;
    this.user.next(user);
    this.isLoggedIn = true;
    localStorage.setItem('userData', JSON.stringify(user));
    console.log(localStorage.getItem('userData'));
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
