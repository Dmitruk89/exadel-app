import { ICartState, initialCartState } from './cart.state';
import { IProductState, initialProductsState } from './products.state';

export interface IAppState {
  products: IProductState;
  cart: ICartState;
}

export const initialAppState: IAppState = {
  products: initialProductsState,
  cart: initialCartState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
