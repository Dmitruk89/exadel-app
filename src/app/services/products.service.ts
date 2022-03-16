import { IProduct } from '../pages/products/products-state/product.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Products } from '../constants/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  getProducts(): Observable<IProduct[]> {
    return of(Products);
  }
}
