import { RouterModule, Routes } from '@angular/router';
import { NewProductComponent } from './new-product/new-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';

//component
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';

//route
const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'new-product', component: NewProductComponent },
  { path: 'delete-product/:id', component: DeleteProductComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
