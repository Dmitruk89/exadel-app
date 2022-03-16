/* eslint-disable @typescript-eslint/typedef */
//import { IProduct } from './../models/product.model';
//import { IProductState } from './../state/products.state';
import { initialProductsState, IProductState } from '../state/products.state';
//import { ProductActions, EProductActions } from '../actions/product.action';
import * as actions from '../actions/product.action';
import { createReducer, on } from '@ngrx/store';

// export const ProductReducers = (
//   state: IProductState = initialProductsState,
//   action: ProductActions,
// ): IProductState => {
//   switch (action.type) {
//     case EProductActions.GET_PRODUCTS_SUCCESS:
//       console.log('product success', action.payload);
//       return {
//         ...state,
//         products: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export const ProductReducers = createReducer(
  initialProductsState,
  on(actions.getProd, (state: IProductState, { products }) => ({
    ...state,
    products: products,
  })),
);
