import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutePaths } from '../constants/route-path';
import { Product } from '../contracts/retrieve-data';
import { LIST_OF_PRODUCTS } from '../mock/product.mock';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public isSortByPrice: boolean;
  public productList = LIST_OF_PRODUCTS;
  constructor(
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly storageService: StorageService,
  ) {
    this.matIconRegistry.addSvgIcon(
      `basket`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/shopping-basket.svg")
    );
  }

  public ngOnInit(): void {
  }

  public sortByAlpha(): void {
    this.productList = this.productList.sort((a, b) => a.productName.localeCompare(b.productName))
    this.isSortByPrice = !this.isSortByPrice;
  }

  public sortByPrice(): void {
    this.productList = this.productList.sort((a, b) => a.price - b.price);
    this.isSortByPrice = !this.isSortByPrice;
  }

  public addToBasket(amount: number): void {
    this.storageService.productsAmount += amount;
  }

  public goToDetailScreen(product: Product): void {
    this.storageService.selectedProduct = product;
    this._router.navigate(['..', RoutePaths.ProductDetail], {relativeTo: this._route});
  }

}
