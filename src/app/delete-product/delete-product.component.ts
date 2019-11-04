import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  product = {
    id: 0,
    name: '',
    description: '',
    count: 0, 
    countStore: 0,
    countStock: 0,
    color: '',
    size: '',
  }
  id;
  constructor(private route: ActivatedRoute,
    private service: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getProduct(this.id).subscribe((data: any) => {
      console.log(data);
      this.product.id = data.Id;
      this.product.name = data.Name;
      this.product.description = data.Description;
      this.product.count = data.Count;
      this.product.countStore = data.CountStore;
      this.product.countStock = data.CountStock;
      this.product.color = data.Color;
      this.product.size = data.Size;
    })
  }

  cancel() {
    this.router.navigate(['/']);
  }
  confirm() {
    this.service.deleteProduct(this.id).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/']);
    })
  }

}
