import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { products } from './products.mock';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getProducts(): any {
    return of(products);
  }
}
