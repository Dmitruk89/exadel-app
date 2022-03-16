import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../products/products-state/product.model';

export const addProduct = createAction('[PRODUCT] Add Product', props<{ product: IProduct }>());
export const removeProduct = createAction(
  '[PRODUCT] Remove Product',
  props<{ product: IProduct }>(),
);
