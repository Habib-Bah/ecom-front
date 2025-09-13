import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private htpp : HttpClient) { }

  getAllProducts() : Observable<any> {
    return this.htpp.get("http://localhost:8081/api/products");
  }

  // @ts-ignore
  deleteProduct(product : any) {
    return this.deleteProduct("http://localhost:8081/api/products/" + product.id)
    //this.products = this.products.filter((p:any) =>p.id != product.id);
  }
}
