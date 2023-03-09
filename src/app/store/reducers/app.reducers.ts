import { ActionReducerMap } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { CartReducers } from './cart.reducer';
import { ProductReducers } from './product.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  products: ProductReducers,
  cart: CartReducers,
};
