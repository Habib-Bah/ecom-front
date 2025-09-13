import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: any;
  constructor() {
  }
  ngOnInit() : void {
    this.products = [
      {id : 1, name : "Computer", price : 2300, selected : true},
      {id : 2,name : "Printer", price : 1200, selected : false},
      {id : 3,name : "Smart Phone", price : 1100, selected : true}
    ]
  }

  handleDelete(product: any) {

    let v = confirm('Etes vous sure de vouloir supprimer ?')
    if (v == true) {
      this.products = this.products.filter((p:any) =>p.id != product.id);
    }
  }
}
