/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { UserPageComponent } from './user-page.component';
import { UserInfoPageComponent } from '../user-info-page/user-info-page.component';
import { AdminPageComponent } from '../admin-page/admin-page.component';
import { RoleGuard } from 'src/app/auth/role.guard';

const userPageRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: UserPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'admin',
      },
      {
        path: 'admin',
        canActivate: [RoleGuard],
        data: {
          expectedRole: 'admin',
        },
        component: AdminPageComponent,
      },
      {
        path: 'info',
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
