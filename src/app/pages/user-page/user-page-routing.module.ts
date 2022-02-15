/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { UserPageComponent } from './user-page.component';
import { Users } from 'src/app/constants/users';

const userPageRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    data: Users[0],
    component: UserPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(userPageRoutes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
