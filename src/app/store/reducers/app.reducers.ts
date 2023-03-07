import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { CartReducers } from './cart.reducer';
import { ProductReducers } from './product.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
  products: ProductReducers,
  cart: CartReducers,
};
