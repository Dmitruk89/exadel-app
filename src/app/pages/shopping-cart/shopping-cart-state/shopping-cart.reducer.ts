/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createFeature, createReducer, on } from '@ngrx/store';

import * as actions from './shopping-cart.actions';
import { Product } from 'src/app/interfaces/interfaces';

interface shoppingCartState {
  products: Product[];
}

const initialState: shoppingCartState = {
  products: [],
};

export const shoppingCartFeature = createFeature({
  name: 'cart',
  reducer: createReducer(
    initialState,
    on(actions.addProduct, (state: shoppingCartState, { product }) => ({
      ...state,
      products: [...state.products, product],
    })),
    on(actions.removeProduct, (state: shoppingCartState, { product }) => ({
      ...state,
      products: state.products.filter((prod) => prod.id !== product.id),
    })),
  ),
});

export const { name, reducer, selectCartState, selectProducts } = shoppingCartFeature;
