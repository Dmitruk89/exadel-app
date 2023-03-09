import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page.component';
import { UserPageRoutingModule } from './user-page-routing.module';
import { AdminPageComponent } from '../admin-page/admin-page.component';
import { UserInfoPageComponent } from '../user-info-page/user-info-page.component';

@NgModule({
  declarations: [UserPageComponent, AdminPageComponent, UserInfoPageComponent],
  imports: [CommonModule, UserPageRoutingModule],
})
export class UserPageModule {}
