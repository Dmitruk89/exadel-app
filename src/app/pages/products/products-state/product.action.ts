import { IProduct } from './product.model';
import { createAction, props } from '@ngrx/store';

export const getProducts = createAction('[PRODUCT] Get Products');

export const getProductsSuccess = createAction(
  '[PRODUCT] Get Products Success',
  props<{ products: IProduct[] }>(),
);

export const getProduct = createAction('[PRODUCT] Get Product', props<{ productId: number }>());

export const getProductSuccess = createAction(
  '[PRODUCT] Get Product Success',
  props<{ product: IProduct }>(),
);
