import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { shoppingCartFeature } from './shopping-cart.reducer';

@NgModule({
  imports: [StoreModule.forFeature(shoppingCartFeature)],
})
export class ShoppingCartStateModule {}
