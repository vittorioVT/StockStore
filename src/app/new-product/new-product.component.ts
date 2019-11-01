import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {

  constructor() { }

  productForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    picture: new FormControl(''),
    isStore: new FormControl(''),
    isStock: new FormControl(''),
    count: new FormControl(''),
    countStore: new FormControl(''),
    countStock: new FormControl(''),
    color: new FormControl(''),
    size: new FormControl(''),
    ordered: new FormControl(''),
    price: new FormControl(''),
    comment: new FormControl('')
  })
}
