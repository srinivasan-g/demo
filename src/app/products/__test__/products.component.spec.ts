import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutePaths } from 'src/app/constants/route-path';

import { LIST_OF_PRODUCTS } from 'src/app/mock/product.mock';
import { StorageService } from 'src/app/services/storage.service';
import { ProductsComponent } from '../products.component';

describe('ProductsComponent', () => {
  let activatedRoute: ActivatedRoute;
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let storageService: StorageService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule, HttpClientModule],
      declarations: [ProductsComponent],
      providers: [
        {
          provide: StorageService,
          useValue: LIST_OF_PRODUCTS,
        },
        {
          provide: Router,
          useValue: jasmine.createSpyObj('routerSpy', ['navigate']),
        },
        {
          provide: ActivatedRoute,
          useValue: {_unique: 0},
        },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    activatedRoute = TestBed.get(ActivatedRoute);
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    storageService = TestBed.inject(StorageService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check "sort by price"', () => {
    component.isSortByPrice = false;
    component.sortByPrice();
    expect(component.isSortByPrice).toBeTruthy();
    expect(component.productList[0].price).toEqual(0.05);
  });

  it('should check "sort by alpha"', () => {
    component.isSortByPrice = true;
    component.sortByAlpha();
    expect(component.isSortByPrice).toBeFalsy();
    expect(component.productList[0].productName).toEqual('Apple');
  });

  it('should check "gotonextscreen"', () => {
    component.goToDetailScreen(LIST_OF_PRODUCTS[0]);
    expect(router.navigate).toHaveBeenCalledWith(['..', RoutePaths.ProductDetail], {
      relativeTo: activatedRoute,
    })
  });
});
