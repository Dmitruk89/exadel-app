import * as actions from './product.action';
import { ProductsService } from 'src/app/services/products.service';
import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { switchMap, Observable, of } from 'rxjs';
import { Product } from 'src/app/interfaces/interfaces';

@Injectable()
export class ProductEffects {
  constructor(private _actions$: Actions, private _productsService: ProductsService) {}

  getProducts$ = createEffect(() =>
    this._actions$.pipe(
      ofType(actions.getProducts.type),
      switchMap((): Observable<Product[]> => this._productsService.getProducts()),
      switchMap((products: Product[]) => of(actions.getProductsSuccess({ products }))),
    ),
  );
}
