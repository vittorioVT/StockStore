import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { MatTableDataSource } from '@angular/material/table';
import { ProductElements } from '../Intefaces/ProductElements';
import { MatDialog, MatSort, MatPaginator } from '@angular/material';
import { UpdateProductComponent } from '../update-product/update-product.component';

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
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private service: ProductService,
              private dialog: MatDialog) { }

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

  updateProduct(product) {
    console.log(product);
    this.dialog.open(UpdateProductComponent, {
      data: {
        Id: product.Id,
        Name: product.Name,
        Description: product.Description,
        IsStore: product.IsStore,
        IsStock: product.IsStock,
        Count: product.Count,
        CountStore: product.CountStore,
        CountStock: product.CountStock,
        Color: product.Color,
        Size: product.Size,
        Ordered: product.Ordered,
        Comment: product.Comment
      }
    })
  }


}
