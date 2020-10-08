import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Location} from '@angular/common';


import { LIST_OF_PRODUCTS } from 'src/app/mock/product.mock';
import { StorageService } from 'src/app/services/storage.service';
import { ProductDetailComponent } from '../product-detail.component';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailComponent ],
      providers: [
        {
          provide: StorageService,
          useValue: {selectedProduct: LIST_OF_PRODUCTS[0]},
        },
        {
          provide: Location,
          useValue: jasmine.createSpyObj('Location', ['back']),
        },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should back button', function() {
    component.goBack();
    expect(location.back).toHaveBeenCalled();
  });
});
