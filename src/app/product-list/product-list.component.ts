import { Component, OnInit} from '@angular/core';
import{ ProductsService} from '../products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Array<any>;
  constructor(private productsService: ProductsService){}

  ngOnInit(){
    this.products = this.productsService.getProducts();
  }
  remove(index){
    this.productsService.remove(index)
    window.alert('Se borro con exito!');
  }
  removeAll(){
    this.productsService.removeAll()
    window.alert('Se borraron todos');
  }

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/