import { IProduct } from '../models/product.model';

export interface IProductState {
  products: IProduct[] | [];
}

export const initialProductsState: IProductState = {
  products: [],
};
