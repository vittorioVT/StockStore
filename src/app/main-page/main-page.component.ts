import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../product.service';
import { ProductElements } from '../Intefaces/ProductElements';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Name', 'Description', 'IsStore',
    'IsStock', 'Count', 'CountStore', 'CountStock', 'Color', 'Size',
    'Ordered', 'Comment'];

  dataSource;

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      console.log('Result - ', data);
      this.dataSource = new MatTableDataSource<ProductElements>(data as ProductElements[]);
    })
    

  }

}
