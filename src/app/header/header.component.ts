import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // public readonly totalAmount = this.storageServices.productsAmount;

  constructor(
    private readonly storageServices: StorageService,
  ) { }

  public totalAmount(): number {
    return this.storageServices.productsAmount;
  }
}
