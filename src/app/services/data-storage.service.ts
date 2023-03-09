import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/interfaces';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient) {}

  private dataStorageUrl = 'https://exadel-app-default-rtdb.europe-west1.firebasedatabase.app';

  save(products: Product[]) {
    this.http.put(`${this.dataStorageUrl}/products.json`, products).subscribe((res) => {
      console.log(res);
    });
  }

  fetch(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.dataStorageUrl}/products.json`);
  }
}
