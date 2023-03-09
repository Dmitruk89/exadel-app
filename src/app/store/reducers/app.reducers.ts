import { ActionReducerMap } from '@ngrx/store';
import { ShoppingCartReducer } from 'src/app/pages/shopping-cart/shopping-cart-state/shopping-cart.reducer';

import { AppState } from '../state/app.state';
//import { CartReducers } from './cart.reducer';
import { ProductReducers } from './product.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  products: ProductReducers,
  cart: ShoppingCartReducer,
};
