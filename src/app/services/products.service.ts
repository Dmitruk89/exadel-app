import { IProduct } from '../pages/products/products-state/product.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Products } from '../constants/products';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private dataStorageService: DataStorageService) {}
  getProducts(): Observable<IProduct[]> {
    //return of(Products);
    return this.dataStorageService.fetch();
  }
}
