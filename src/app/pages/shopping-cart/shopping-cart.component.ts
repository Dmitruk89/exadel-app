import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/interfaces/interfaces';
import { AppState } from 'src/app/store/state/app.state';
import { removeProduct } from './shopping-cart-state/shopping-cart.actions';
import { shoppingCartFeature } from './shopping-cart-state/shopping-cart.reducer';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  products$ = this._store.select(shoppingCartFeature.selectProducts);
  totalSum = 0;
  //TODO: split App state to CartState and ProductState
  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    this.products$.subscribe((products: Product[]) => {
      this.totalSum = products.reduce((acc: number, prod: Product) => acc + prod.price, 0);
    });
  }

  removeFromCart(product: Product): void {
    this._store.dispatch(removeProduct({ product }));
  }
}
