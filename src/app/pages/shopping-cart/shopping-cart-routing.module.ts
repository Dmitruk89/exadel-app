/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ShoppingCartComponent } from './shopping-cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const shoppingCartRoutes: Routes = [
  {
    path: '',
    component: ShoppingCartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(shoppingCartRoutes)],
  exports: [RouterModule],
})
export class ShoppingCartRoutingModule {}
