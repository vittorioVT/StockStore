import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Name', 'Description', 'IsStore',
    'IsStock', 'Count', 'CountStore', 'CountStock', 'Color', 'Size',
    'Ordered', 'Comment', 'Actions'];
 dataSource;

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {

      console.log('Result - ', data);
    })
  }

}
