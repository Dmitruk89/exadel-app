import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { blankUser, validUser } from 'src/app/mock/mock-login';

const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
let authServiceSpy = jasmine.createSpyObj('AuthService', ['login', 'signup', 'logout', 'user$']);

describe('LoginComponent isolated test', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let form: FormGroup;

  beforeEach(async () =>
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy },
        FormBuilder,
      ],
      imports: [HttpClientTestingModule, BrowserAnimationsModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents(),
  );

  authServiceSpy = {
    ...authServiceSpy,
    user: of(null),
  };

  beforeEach(() => {
    component = new LoginComponent(authServiceSpy, routerSpy, new FormBuilder());
    fixture = TestBed.createComponent(LoginComponent);
    form = component.authForm;
    fixture.detectChanges();
  });

  function updateForm(userEmail: string, userPassword: string) {
    form['value'].email = userEmail;
    form['value'].password = userPassword;
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('properly initialised', () => {
    expect(component.isLoggedIn).toBeUndefined();
    expect(component.isLoginMode).toBeTrue();
    expect(component.isVisible).toBeFalse();
    expect(component.isLoading).toBeFalse();
    expect(component.error).toBeNull();
    expect(component.user$).toBeUndefined();
  });

  it('loading should be true when onSubmit()', () => {
    component.onSubmit();
    expect(component.isLoading).toBeTrue;
    expect(component.error).toBeNull();
  });

  it('form value should update when input changed', () => {
    updateForm(validUser.email, validUser.password);
    expect(form.value).toEqual(validUser);
  });

  it('Form invalid should be true when form is invalid', () => {
    updateForm(blankUser.email, blankUser.password);
    expect(form.invalid).toBeTruthy();
  });
});
