import { IProduct } from './../models/product.model';
import { Action, createAction, props } from '@ngrx/store';

export enum EProductActions {
  GET_PRODUCTS = '[PRODUCT] Get Products',
  GET_PRODUCTS_SUCCESS = '[PRODUCT] Get Products Success',
  GET_PRODUCT = '[PRODUCT] Get Product',
  GET_PRODUCT_SUCCESS = '[PRODUCT] Get Product Success',
}

export class GetProducts implements Action {
  readonly type = EProductActions.GET_PRODUCTS;
}

export class GetProductsSuccess implements Action {
  readonly type = EProductActions.GET_PRODUCTS_SUCCESS;
  constructor(public payload: IProduct[]) {}
}

export class GetProduct implements Action {
  readonly type = EProductActions.GET_PRODUCT;
  constructor(public payload: number) {}
}

export class GetProductSuccess implements Action {
  readonly type = EProductActions.GET_PRODUCT_SUCCESS;
  constructor(public payload: IProduct) {}
}

export const getProd = createAction(
  '[PRODUCT] Get Products Success',
  props<{ products: IProduct[] }>(),
);

export type ProductActions = GetProducts | GetProductsSuccess | GetProduct | GetProductSuccess;
