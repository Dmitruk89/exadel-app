/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createFeature, createReducer, on } from '@ngrx/store';

import * as actions from './product.action';
import { Product } from 'src/app/interfaces/interfaces';

interface productState {
  products: Product[];
  loading: boolean;
}

const initialState: productState = {
  products: [],
  loading: false,
};

export const productsFeature = createFeature({
  name: 'products',
  reducer: createReducer(
    initialState,
    on(actions.getProducts, (state: productState) => ({
      ...state,
      loading: true,
    })),
    on(actions.getProductsSuccess, (state: productState, { products }) => ({
      ...state,
      products,
      loading: false,
    })),
  ),
});

export const { name, reducer, selectProductsState, selectProducts, selectLoading } =
  productsFeature;
