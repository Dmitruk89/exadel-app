import { CartState, initialCartState } from './cart.state';
import { initialProductsState, ProductState } from './products.state';

export interface AppState {
  products: ProductState;
  cart: CartState;
}

export const initialAppState: AppState = {
  products: initialProductsState,
  cart: initialCartState,
};

export function getInitialState(): AppState {
  return initialAppState;
}
