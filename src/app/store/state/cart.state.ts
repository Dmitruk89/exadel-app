import { IProduct } from '../models/product.model';

export interface ICartState {
  products: IProduct[] | [];
}

export const initialCartState: ICartState = {
  products: [],
};
