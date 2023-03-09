import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/interfaces/interfaces';

export const addProduct = createAction('[PRODUCT] Add Product', props<{ product: Product }>());
export const removeProduct = createAction(
  '[PRODUCT] Remove Product',
  props<{ product: Product }>(),
);
