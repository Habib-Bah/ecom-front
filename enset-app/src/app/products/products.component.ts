import { Component } from '@angular/core';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: any;
  constructor(private productService : ProductService) {
  }
  ngOnInit() : void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.products = this.productService.getAllProducts().subscribe({
      next : repvalue => {
        this.products = repvalue;
      },
      error : err => {
        console.log(err);
      }
    });
  }

  handleDelete(product: any) {

    let v = confirm('Etes vous sure de vouloir supprimer ?')
    if (v == true) {
      this.productService.deleteProduct(product).subscribe({
        next : () => {
          this.getAllProduct();
        },
        error : (err: any) => {
          console.log(err);
        }
      });
    }
  }
}
