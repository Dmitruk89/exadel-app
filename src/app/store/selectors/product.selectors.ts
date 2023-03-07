import { IProductState } from './../state/products.state';
import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';

const selectProduct = (state: IAppState): IProductState => state.products;

export const selectProductsList = createSelector(
  selectProduct,
  (state: IProductState) => state.products,
);
