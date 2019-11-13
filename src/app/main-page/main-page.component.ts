import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../product.service';
import { ProductElements } from '../Intefaces/ProductElements';
import { MatSort, MatPaginator } from '@angular/material';

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

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      console.log('Result - ', data);
      this.dataSource = new MatTableDataSource<ProductElements>(data as ProductElements[]);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
