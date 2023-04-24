import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../interfaces/interfaces';
import { DataStorageService } from './data-storage.service';

let httpClientSpy: jasmine.SpyObj<HttpClient>;
let dataStorageService: DataStorageService;

const expectedProducts: Product[] = [
  {
    id: 0,
    category: 'office',
    name: 'Alof',
    description: 'chair',
    price: 300,
    img: 'http/image0.jpg',
  },
  {
    id: 1,
    category: 'office',
    name: 'Olaf',
    description: 'table',
    price: 500,
    img: 'http/image1.jpg',
  },
];

const errorMessage = 'test 404 error';

beforeEach(() => {
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  dataStorageService = new DataStorageService(httpClientSpy);
});

describe('data-storage-service', () => {
  it('should return expected products (HttpClient called once)', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(expectedProducts));

    dataStorageService.fetch().subscribe({
      next: (products) => {
        expect(products).withContext('expected products').toEqual(expectedProducts);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });

  it('should return an error when the server returns a 404', () => {
    httpClientSpy.get.and.returnValue(throwError(() => new Error(errorMessage)));

    dataStorageService
      .fetch()
      .pipe(
        catchError((error) => {
          expect(error.message).toEqual('test 404 error');
          return of(null);
        }),
      )
      .subscribe();
  });
});
