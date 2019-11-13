import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Type } from '../Intefaces/Type';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  types: Type[] = [
    { value: true, display: 'є' },
    { value: false, display: 'немає' },

  ]

  constructor(private service: ProductService,
              private router: Router) { }

  productForm = new FormGroup({
    //id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    isStore: new FormControl('', Validators.required),
    isStock: new FormControl('', Validators.required),
    count: new FormControl('', Validators.required),
    countStore: new FormControl('', Validators.required),
    countStock: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    size: new FormControl('', Validators.required),
    ordered: new FormControl('', Validators.required),
    comment: new FormControl('')
  })

  onSubmit() {
   this.service.createProduct(this.productForm.value).subscribe(
      (data) => {
        console.log('Data - ', data);
        this.router.navigate(['/']);
      })
  }

  
}
