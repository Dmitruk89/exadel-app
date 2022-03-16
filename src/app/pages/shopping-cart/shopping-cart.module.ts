import { ShoppingCartComponent } from './shopping-cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartStateModule } from './shopping-cart-state/shopping-cart.state.module';

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [CommonModule, ShoppingCartRoutingModule, ShoppingCartStateModule],
})
export class ShoppingCartModule {}
