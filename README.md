# ExadelApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

## Technologies used

- Angular Router.
- Lazy loaded modules.
- Guards.
- Angular template-driven form for login.
- Authentication with login/password using firebase API
- In demo porpuses the communication between components implemented with usage both: RxJs subjects and NgRx store.
- Store Devtools Module for debugging NgRx.
- Static analisys testing through Eslint-typescript and Pretier.
- Angular animation.
- Font awesome.

## Currently working on

- refactoring NgRx store for components.
- providing unit tests

## Recent updates

- Added user roles for admin to access admin page and for the rest of users to access the info page.
- All the produts was added to the Firebase database through data-storage component.
- Loading spinner was added for better UX.
- Authentication process with Firebase API.
- Styles was added for major components

## Comming updates

- Admin can create and save products to database.
- User can add products to favorites, will be visible on info user's page
- Users can placing an order

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
