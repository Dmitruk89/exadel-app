import { Action } from '@ngrx/store';
import { IProduct } from '../models/product.model';

export enum ECartActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
}

export class AddProduct implements Action {
  readonly type = ECartActionTypes.ADD_PRODUCT;
  constructor(public payload: IProduct) {}
}

export class RemoveProduct implements Action {
  readonly type = ECartActionTypes.REMOVE_PRODUCT;
  constructor(public payload: IProduct) {}
}

export type CartActions = AddProduct | RemoveProduct;
