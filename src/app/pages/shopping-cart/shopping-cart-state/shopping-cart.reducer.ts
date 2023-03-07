/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { IProduct } from '../../products/products-state/product.model';
import { createFeature, createReducer, on } from '@ngrx/store';

import * as actions from './shopping-cart.actions';

interface State {
  products: IProduct[];
}

const initialState: State = {
  products: [],
};

export const shoppingCartFeature = createFeature({
  name: 'cart',
  reducer: createReducer(
    initialState,
    on(actions.addProduct, (state: State, { product }) => ({
      ...state,
      products: [...state.products, product],
    })),
    on(actions.removeProduct, (state: State, { product }) => ({
      ...state,
      products: state.products.filter((prod) => prod.id !== product.id),
    })),
  ),
});

export const { name, reducer, selectCartState, selectProducts } = shoppingCartFeature;
