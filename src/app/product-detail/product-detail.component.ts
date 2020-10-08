import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import {Location} from '@angular/common';
import { PRODUCT_CONTENT } from '../mock/product.mock';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
 public readonly product =  this.storageService.selectedProduct
 public readonly productContent =  PRODUCT_CONTENT.find((p) => 
   p.productId === this.storageService.selectedProduct.productId 
 )
  constructor(
    private readonly storageService: StorageService,
    private readonly location: Location,
  ) { }

  public goBack(): void {
    this.location.back();
  }
}
