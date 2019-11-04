import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = 'http://localhost:13764/api/products';
  
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.baseUrl);
  }

  createProduct(product) {

    return this.http.post(this.baseUrl, product);
  }

  updateProduct(id, product) {

    return this.http.put(this.baseUrl + '/' + id, product);
  }

  getProduct(id) {

    return this.http.get(this.baseUrl + '/' + id);
  }

}
