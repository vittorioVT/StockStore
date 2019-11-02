import { RouterModule, Routes } from '@angular/router';
import { NewProductComponent } from './new-product/new-product.component';

//component
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';

//route
const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'new-products', component: NewProductComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
