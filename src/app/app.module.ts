import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NewProductComponent } from './new-product/new-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { RegisterComponent } from './register/register.component';

//services
import { ProductService } from './product.service';
import { AppRouterModule } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

//material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatTableModule, MatInputModule,
  MatCardModule, MatSelectModule, MatToolbarModule,
  MatDialogModule, MatListModule,
       } from '@angular/material';


//forms
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';







@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FooterComponent,
    HeaderComponent,
    NewProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,

    //material design
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    MatDialogModule,
    MatListModule,

    //forms
    ReactiveFormsModule,
    
  ],
  entryComponents: [UpdateProductComponent],
  providers: [ProductService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
