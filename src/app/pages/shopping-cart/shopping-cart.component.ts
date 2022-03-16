import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { IProduct } from '../products/products-state/product.model';
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

  constructor(private _store: Store<IAppState>) {}

  ngOnInit(): void {
    this.products$.subscribe((products: IProduct[]) => {
      this.totalSum = products.reduce((acc: number, prod: IProduct) => acc + prod.price, 0);
    });
  }

  removeFromCart(product: IProduct): void {
    this._store.dispatch(removeProduct({ product }));
  }
}
