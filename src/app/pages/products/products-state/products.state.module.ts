import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductEffects } from './product.effects';
import { productsFeature } from './product.reducer';

@NgModule({
  imports: [StoreModule.forFeature(productsFeature), EffectsModule.forFeature([ProductEffects])],
})
export class ProductsStateModule {}
