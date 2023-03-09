import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/interfaces/interfaces';

export const getProducts = createAction('[PRODUCT] Get Products');

export const getProductsSuccess = createAction(
  '[PRODUCT] Get Products Success',
  props<{ products: Product[] }>(),
);

export const getProduct = createAction('[PRODUCT] Get Product', props<{ productId: number }>());

export const getProductSuccess = createAction(
  '[PRODUCT] Get Product Success',
  props<{ product: Product }>(),
);
