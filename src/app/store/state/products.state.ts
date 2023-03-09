import { Product } from 'src/app/interfaces/interfaces';

export interface ProductState {
  products: Product[] | [];
}

export const initialProductsState: ProductState = {
  products: [],
};
