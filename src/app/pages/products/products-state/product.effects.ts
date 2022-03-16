import { IProduct } from './product.model';
import * as actions from './product.action';
import { ProductsService } from 'src/app/services/products.service';
import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { switchMap, Observable, of } from 'rxjs';

@Injectable()
export class ProductEffects {
  constructor(private _actions$: Actions, private _productsService: ProductsService) {}

  getProducts$ = createEffect(() =>
    this._actions$.pipe(
      ofType(actions.getProducts.type),
      switchMap((): Observable<IProduct[]> => this._productsService.getProducts()),
      switchMap((products: IProduct[]) => of(actions.getProductsSuccess({ products }))),
    ),
  );
}
