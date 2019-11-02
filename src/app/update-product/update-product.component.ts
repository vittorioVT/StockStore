import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Type } from '../Intefaces/Type';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  form: FormGroup;
  id: number;
  

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateProductComponent>,
    @Inject(MAT_DIALOG_DATA) { Id, Name, Description, IsStore, IsStock,
      Count, CountStore, CountStock, Color, Size, Ordered, Comment },
    private service: ProductService) {
    this.id = Id;
    this.form = fb.group({
      name: [Name, Validators.required],
      description: [Description, Validators.required],
      isStore: [IsStore, Validators.required],
      isStock: [IsStock, Validators.required],
      count: [Count, Validators.required],
      countStore: [CountStore, Validators.required],
      countStock: [CountStock, Validators.required],
      color: [Color, Validators.required],
      size: [Size, Validators.required],
      ordered: [Ordered, Validators.required],
      comment: [Comment, Validators.required]
    });

  }
   
  Types: Type[] = [
    { value: true, display: 'є' },
    { value: false, display: 'немає' }
  ]

  close() {
    this.dialogRef.close();
  }

  save() {
    this.form.value.id = this.id;
    this.service.updateProduct(this.id, this.form.value).subscribe(
      (data) => {
        console.log('Data: ', data);
      })
  }


  ngOnInit() {
  }

}
