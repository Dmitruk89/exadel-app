import { IProduct } from './../models/product.model';
import { EProductActions, getProd, GetProducts } from './../actions/product.action';
import { ProductsService } from 'src/app/services/products.service';
import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { switchMap, Observable, of } from 'rxjs';

@Injectable()
export class ProductEffects {
  constructor(private _actions$: Actions, private _productsService: ProductsService) {}

  getProducts$ = createEffect(() =>
    this._actions$.pipe(
      ofType<GetProducts>(EProductActions.GET_PRODUCTS),
      switchMap((): Observable<IProduct[]> => this._productsService.getProducts()),
      switchMap((products: IProduct[]) => of(getProd({ products: products }))),
    ),
  );
}
