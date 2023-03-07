import { ECartActionTypes, CartActions } from '../actions/cart.action';
import { initialCartState, ICartState } from '../state/cart.state';

export function CartReducers(
  state: ICartState = initialCartState,
  action: CartActions,
): ICartState {
  switch (action.type) {
    case ECartActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
}
