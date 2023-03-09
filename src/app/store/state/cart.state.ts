import { Product } from 'src/app/interfaces/interfaces';

export interface CartState {
  products: Product[] | [];
}

export const initialCartState: CartState = {
  products: [],
};
