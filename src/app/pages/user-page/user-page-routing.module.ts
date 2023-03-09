/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { UserPageComponent } from './user-page.component';
import { Users } from 'src/app/constants/users';
import { UserInfoPageComponent } from '../user-info-page/user-info-page.component';
import { AdminPageComponent } from '../admin-page/admin-page.component';

const userPageRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    data: Users[0],
    component: UserPageComponent,
    children: [
      {
        path: 'admin',
        component: AdminPageComponent,
      },
      {
        path: 'user',
        component: UserInfoPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(userPageRoutes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
