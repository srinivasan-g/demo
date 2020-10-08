import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RoutePaths } from './constants/route-path';
import { HeaderComponent } from './header/header.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutePaths.DashBoard,
    pathMatch: 'full',
  },
  {
    path: RoutePaths.DashBoard,
    children: [
      {
        path: '',
        redirectTo: RoutePaths.DashBoard,
        pathMatch: 'full',
      },
      {
        path: RoutePaths.DashBoard,
        component: ProductsComponent,
      },
      {
        path: RoutePaths.ProductDetail,
        component: ProductDetailComponent,
      }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
