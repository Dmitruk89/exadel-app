import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataStorageService } from './data-storage.service';
import { Product } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private dataStorageService: DataStorageService) {}
  getProducts(): Observable<Product[]> {
    return this.dataStorageService.fetch();
  }
}
