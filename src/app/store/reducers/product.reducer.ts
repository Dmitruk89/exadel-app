/* eslint-disable @typescript-eslint/typedef */
import { initialProductsState, IProductState } from '../state/products.state';

import * as actions from '../actions/product.action';
import { createReducer, on } from '@ngrx/store';

export const ProductReducers = createReducer(
  initialProductsState,
  on(actions.getProd, (state: IProductState, { products }) => ({
    ...state,
    products: products,
  })),
);
