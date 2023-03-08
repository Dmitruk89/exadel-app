import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../interfaces/interfaces';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient) {}

  save(products: Product[]) {
    this.http
      .put(
        'https://exadel-app-default-rtdb.europe-west1.firebasedatabase.app/products.json',
        products,
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  fetch(): Observable<Product[]> {
    return this.http.get<Product[]>(
      'https://exadel-app-default-rtdb.europe-west1.firebasedatabase.app/products.json',
    );
  }
}
