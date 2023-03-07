/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts.component';

const contactsRoutes: Routes = [
  {
    path: '',
    component: ContactsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(contactsRoutes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
