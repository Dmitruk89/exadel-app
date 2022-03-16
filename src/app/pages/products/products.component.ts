import { productsFeature } from './products-state/products.reducer';
import { IProduct } from '../products/products-state/product.model';
import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { addProduct } from '../shopping-cart/shopping-cart-state/shopping-cart.actions';
import { getProducts } from './products-state/product.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$ = this._store.select(productsFeature.selectProducts);

  constructor(private _store: Store<IAppState>) {}

  ngOnInit(): void {
    this._store.dispatch(getProducts());
  }

  addToCart(product: IProduct, event: MouseEvent): void {
    const addButton = (<HTMLInputElement>event.target).closest('.add_to_cart_button');
    if (addButton) {
      addButton.classList.add('button_pressed');
      setTimeout(() => {
        addButton.classList.remove('button_pressed');
      }, 200);
    }
    this._store.dispatch(addProduct({ product }));
  }
}
