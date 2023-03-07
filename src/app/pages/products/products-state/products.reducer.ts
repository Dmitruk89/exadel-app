/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { IProduct } from './product.model';
import { createFeature, createReducer, on } from '@ngrx/store';

import * as actions from './product.action';

interface State {
  products: IProduct[];
  loading: boolean;
}

const initialState: State = {
  products: [],
  loading: false,
};

export const productsFeature = createFeature({
  name: 'products',
  reducer: createReducer(
    initialState,
    on(actions.getProducts, (state: State) => ({
      ...state,
      loading: true,
    })),
    on(actions.getProductsSuccess, (state: State, { products }) => ({
      ...state,
      products,
      loading: false,
    })),
  ),
});

export const { name, reducer, selectProductsState, selectProducts, selectLoading } =
  productsFeature;
