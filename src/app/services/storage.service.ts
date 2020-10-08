import { Injectable } from '@angular/core';
import { Product } from '../contracts/retrieve-data';

@Injectable({
    providedIn: 'root',
  })
  export class StorageService {
    public productsAmount: number = 0;
    public selectedProduct: Product;
  }